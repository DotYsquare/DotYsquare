"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, Loader2 } from "lucide-react"

export const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Cloud Solutions",
  "AI & Data Engineering",
  "Cybersecurity",
  "UI/UX Design",
  "DevOps & Automation",
  "IT Support & Managed Services",
  "Technology Consulting",
  "Other",
] as const

const BUDGETS = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Let's discuss",
] as const

const schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .regex(/^[+\d][\d\s()-]{6,}$/, "Enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Please tell us a bit more (min. 10 characters)"),
  consent: z.boolean().refine((v) => v === true, "Please accept to be contacted"),
})

type FormValues = z.infer<typeof schema>

const fieldError = "text-xs text-destructive mt-1.5"
const reqMark = <span className="text-destructive ml-0.5">*</span>

export function LeadForm({
  variant = "contact",
  className,
}: {
  variant?: "contact" | "quote"
  className?: string
}) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      consent: false,
    },
  })

  const onSubmit = async (data: FormValues) => {
    // Simulate a network request. Wire this to your API / email service.
    await new Promise((r) => setTimeout(r, 900))
    console.log("Lead submitted:", data)
    toast.success("Thank you! We'll get back to you within 24 hours.")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-5 ${className ?? ""}`} noValidate>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="firstName" className="mb-2 block">
            First Name {reqMark}
          </Label>
          <Input id="firstName" placeholder="John" aria-invalid={!!errors.firstName} {...register("firstName")} />
          {errors.firstName && <p className={fieldError}>{errors.firstName.message}</p>}
        </div>
        <div>
          <Label htmlFor="lastName" className="mb-2 block">
            Last Name {reqMark}
          </Label>
          <Input id="lastName" placeholder="Doe" aria-invalid={!!errors.lastName} {...register("lastName")} />
          {errors.lastName && <p className={fieldError}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="email" className="mb-2 block">
            Email Address {reqMark}
          </Label>
          <Input id="email" type="email" placeholder="john@company.com" aria-invalid={!!errors.email} {...register("email")} />
          {errors.email && <p className={fieldError}>{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone" className="mb-2 block">
            Phone Number {reqMark}
          </Label>
          <Input id="phone" placeholder="+91 98765 43210" aria-invalid={!!errors.phone} {...register("phone")} />
          {errors.phone && <p className={fieldError}>{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="company" className="mb-2 block">
            Company <span className="text-muted-foreground font-normal">(optional)</span>
          </Label>
          <Input id="company" placeholder="Your company" {...register("company")} />
        </div>
        <div>
          <Label className="mb-2 block">Service Needed {reqMark}</Label>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger aria-invalid={!!errors.service} className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && <p className={fieldError}>{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <Label className="mb-2 block">
          {variant === "quote" ? "Project Budget" : "Estimated Budget"} {reqMark}
        </Label>
        <Controller
          control={control}
          name="budget"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger aria-invalid={!!errors.budget} className="w-full">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {BUDGETS.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.budget && <p className={fieldError}>{errors.budget.message}</p>}
      </div>

      <div>
        <Label htmlFor="message" className="mb-2 block">
          {variant === "quote" ? "Project Details" : "Message"} {reqMark}
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          className="min-h-[130px]"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && <p className={fieldError}>{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <Controller
          control={control}
          name="consent"
          render={({ field }) => (
            <Checkbox id="consent" checked={field.value} onCheckedChange={field.onChange} className="mt-0.5" />
          )}
        />
        <div>
          <Label htmlFor="consent" className="font-normal text-sm text-muted-foreground leading-snug">
            I agree to be contacted by DotYsquare regarding my enquiry. {reqMark}
          </Label>
          {errors.consent && <p className={fieldError}>{errors.consent.message}</p>}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-brand text-brand-foreground hover:bg-brand-dark font-semibold group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            {variant === "quote" ? "Get Free Quote" : "Send Message"}
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  )
}
