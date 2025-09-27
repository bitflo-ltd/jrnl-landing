"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircleIcon, SpinnerIcon, WarningIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addWaitlistEntry, checkEmailExists } from "@/lib/supabase";

interface WaitlistFormData {
  email: string;
  role?: string;
  agreeToUpdates: boolean;
}

export function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    setError: setFormError,
  } = useForm<WaitlistFormData>();

  const agreeToUpdates = watch("agreeToUpdates");

  const onSubmit = async (data: WaitlistFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Check if email already exists
      const emailExists = await checkEmailExists(data.email);
      
      if (emailExists) {
        setFormError("email", {
          type: "manual",
          message: "This email is already on the waitlist!"
        });
        return;
      }

      // Add to waitlist
      await addWaitlistEntry({
        email: data.email,
        role: data.role,
        agree_to_updates: data.agreeToUpdates,
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-md mx-auto">
            <Card className="text-center p-8">
              <CardContent>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">You&apos;re on the list! 🎉</h3>
                <p className="text-muted-foreground mb-6">
                  We&apos;ll keep you updated on our progress and let you know as soon as JRNL is ready to transform your journaling practice.
                </p>
                <p className="text-sm text-muted-foreground">
                  Check your email for a confirmation message.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience AI-powered journaling that respects your privacy. 
            Get early access when we launch in Q1 2026.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Get Early Access</CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="flex items-center gap-2 p-3 mb-4 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
                  <WarningIcon className="h-4 w-4" />
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email Field */}
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className="w-full"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Role Selection */}
                <div>
                  <Select onValueChange={(value) => setValue("role", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="What describes you best? (Optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="founder">Founder</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="writer">Writer</SelectItem>
                      <SelectItem value="therapist">Therapist</SelectItem>
                      <SelectItem value="coach">Coach</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToUpdates"
                    checked={agreeToUpdates}
                    onCheckedChange={(checked) => setValue("agreeToUpdates", !!checked)}
                  />
                  <label htmlFor="agreeToUpdates" className="text-sm leading-relaxed">
                    I agree to receive updates about JRNL via email. You can unsubscribe at any time.
                  </label>
                </div>
                {errors.agreeToUpdates && (
                  <p className="text-sm text-destructive">
                    Please agree to receive updates to join the waitlist
                  </p>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={!agreeToUpdates || isLoading}
                >
                  {isLoading ? (
                    <>
                      <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />
                      Joining Waitlist...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>

                {/* Privacy Note */}
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Unsubscribe anytime. Your email will never be shared.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}