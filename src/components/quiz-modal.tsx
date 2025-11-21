import { useCallback, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { buildQuizUrl } from "@/lib/api";

type Difficulty = "Easy" | "Medium" | "Hard";

interface ApiQuizQuestion {
  question: string;
  options: string[];
  correct_answer: string;
  difficulty: Difficulty | string;
}

interface QuizResponse {
  success: boolean;
  video_id: string;
  quiz: ApiQuizQuestion[];
}

interface QuizModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
}

const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

export const QuizModal = ({ open, onClose, videoUrl }: QuizModalProps) => {
  const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [questions, setQuestions] = useState<ApiQuizQuestion[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(
    {}
  );
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number } | null>(
    null
  );

  const resetState = useCallback(() => {
    setLoading(false);
    setError(null);
    setQuestions([]);
    setHasStarted(false);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(null);
  }, []);

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleStart = async () => {
    if (!videoUrl || loading) {
      return;
    }

    setLoading(true);
    setError(null);
    setShowResults(false);
    setScore(null);
    setSelectedAnswers({});

    try {
      const response = await fetch(buildQuizUrl(videoUrl));
      const contentType = response.headers.get("content-type") ?? "";

      if (!contentType.toLowerCase().includes("application/json")) {
        throw new Error("Received an invalid response from the quiz service.");
      }

      const data = (await response.json()) as QuizResponse & { error?: string };

      if (!response.ok) {
        throw new Error(
          data?.error ?? "Unable to generate quiz. Please try again."
        );
      }

      if (!data.success || !Array.isArray(data.quiz)) {
        throw new Error("Quiz generation failed. Please try again later.");
      }

      const filtered =
        data.quiz?.filter(
          (item) =>
            item.difficulty?.toLowerCase() === difficulty.toLowerCase()
        ) ?? [];

      setQuestions(filtered);
      setHasStarted(true);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAnswer = (index: number, value: string) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = useCallback(() => {
    if (!questions.length) return;

    const correct = questions.reduce((count, question, index) => {
      const selected = selectedAnswers[index];
      if (selected && selected === question.correct_answer) {
        return count + 1;
      }
      return count;
    }, 0);

    setScore({ correct, total: questions.length });
    setShowResults(true);
  }, [questions, selectedAnswers]);

  const handleRetake = () => {
    setShowResults(false);
    setScore(null);
    setSelectedAnswers({});
    setQuestions([]);
    setHasStarted(false);
  };

  const answeredCount = useMemo(
    () =>
      Object.values(selectedAnswers).filter((answer) => typeof answer === "string")
        .length,
    [selectedAnswers]
  );

  const canSubmit =
    hasStarted &&
    questions.length > 0 &&
    !showResults &&
    answeredCount === questions.length;

  const quizContent = useMemo(() => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-12 text-muted-foreground gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Generating quiz questions...</span>
        </div>
      );
    }

    if (error) {
      return (
        <Card className="p-4 bg-destructive/5 border-destructive/30 text-destructive text-sm flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </Card>
      );
    }

    if (!hasStarted) {
      return (
        <Card className="p-4 bg-muted/40 text-muted-foreground text-sm">
          Select a difficulty and click Start Quiz to begin.
        </Card>
      );
    }

    if (!questions.length) {
      return (
        <Card className="p-4 bg-muted/40 text-muted-foreground text-sm">
          No questions are available for this difficulty. Try another level.
        </Card>
      );
    }

    const progress = Math.round((answeredCount / questions.length) * 100);

    return (
      <>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-semibold">
              Question {Math.min(answeredCount + 1, questions.length)} of{" "}
              {questions.length}
            </span>
            <span className="text-xs">{progress}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-4">
          {questions.map((question, idx) => (
            <Card key={`question-${idx}`} className="p-4 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold leading-relaxed">
                  {idx + 1}. {question.question}
                </p>
                {question.difficulty && (
                  <Badge
                    variant="secondary"
                    className="text-[10px] uppercase tracking-wide"
                  >
                    {question.difficulty}
                  </Badge>
                )}
              </div>

              <RadioGroup
                value={selectedAnswers[idx] ?? ""}
                onValueChange={(value) => handleSelectAnswer(idx, value)}
                className="space-y-2"
                disabled={showResults}
              >
                {question.options.map((option, optionIdx) => {
                  const isSelected = selectedAnswers[idx] === option;
                  const isCorrectChoice =
                    showResults && option === question.correct_answer;
                  const isIncorrectChoice =
                    showResults && isSelected && option !== question.correct_answer;

                  return (
                    <Label
                      key={`option-${idx}-${optionIdx}`}
                      htmlFor={`question-${idx}-option-${optionIdx}`}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border p-3 text-sm transition-colors",
                        !showResults && "cursor-pointer hover:border-primary/60",
                        isSelected && !showResults && "border-primary bg-primary/5",
                        isCorrectChoice && "border-success bg-success/10",
                        isIncorrectChoice && "border-destructive bg-destructive/10",
                        showResults &&
                          !isCorrectChoice &&
                          !isIncorrectChoice &&
                          "opacity-70 cursor-not-allowed"
                      )}
                    >
                      <RadioGroupItem
                        id={`question-${idx}-option-${optionIdx}`}
                        value={option}
                        disabled={showResults}
                      />
                      <span className="flex-1">{option}</span>
                    </Label>
                  );
                })}
              </RadioGroup>
            </Card>
          ))}
        </div>

        {!showResults && (
          <Button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="w-full"
            size="lg"
          >
            Submit Quiz
          </Button>
        )}

        {showResults && score && (
          <Card className="p-4 space-y-2 border-primary/40 bg-primary/5">
            <p className="text-sm font-semibold">Quiz Complete</p>
            <p className="text-lg font-bold">
              You scored {score.correct} / {score.total}
            </p>
            <p className="text-sm text-muted-foreground">
              Review your answers or retake the quiz to improve your score.
            </p>
          </Card>
        )}
      </>
    );
  }, [
    answeredCount,
    canSubmit,
    error,
    handleSubmit,
    hasStarted,
    loading,
    questions,
    score,
    selectedAnswers,
    showResults,
  ]);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="sm:max-w-3xl w-full max-h-[90vh] p-0 flex h-full flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-background">
          <DialogTitle>Take Lesson Quiz</DialogTitle>
          <DialogDescription>
            Choose a difficulty, generate questions, and track your progress.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-1 min-h-0 flex-col">
          <div className="px-6 py-4 space-y-4">
            <div>
              <p className="text-sm font-semibold mb-2">Select difficulty</p>
              <RadioGroup
                value={difficulty}
                onValueChange={(value) => setDifficulty(value as Difficulty)}
                className="grid grid-cols-1 gap-3 sm:grid-cols-3"
                disabled={loading || hasStarted}
              >
                {difficulties.map((option) => (
                  <label
                    key={option}
                    className={cn(
                      "flex items-center gap-3 rounded-lg border p-3 text-sm transition-colors",
                      difficulty === option
                        ? "border-primary bg-primary/5"
                        : "hover:border-primary/50",
                      (loading || hasStarted) && "opacity-60 cursor-not-allowed"
                    )}
                  >
                    <RadioGroupItem value={option} />
                    <span>{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleStart}
                disabled={loading}
                className="flex-1"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Quiz
                  </>
                ) : (
                  "Start Quiz"
                )}
              </Button>
              {hasStarted && !loading && (
                <Button variant="outline" onClick={handleRetake} className="flex-1">
                  Retake Quiz
                </Button>
              )}
            </div>
          </div>

          <div className="flex-1 min-h-0 px-6 pb-4">
            <ScrollArea className="h-full w-full rounded-md border border-transparent">
              <div className="pr-4 pb-6 space-y-6">{quizContent}</div>
            </ScrollArea>
          </div>
        </div>

        <div className="border-t px-6 py-4 bg-background flex items-center justify-end gap-2">
          {showResults && (
            <Button variant="outline" onClick={handleRetake}>
              Try Again
            </Button>
          )}
          <Button variant={showResults ? "default" : "outline"} onClick={handleClose}>
            {showResults ? "Close Quiz" : "Cancel"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

