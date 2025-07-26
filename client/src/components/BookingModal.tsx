import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { toast } = useToast();
  const [bookingSuccess, setBookingSuccess] = useState<{
    success: boolean;
    meetLink: string;
    details: any;
  } | null>(null);
  
  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/book-consultation", data);
      return response.json();
    },
    onSuccess: (data) => {
      setBookingSuccess(data);
      toast({
        title: "Booking Confirmed!",
        description: "Your consultation has been booked successfully!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertBooking) => {
    bookingMutation.mutate(data);
  };

  const handleClose = () => {
    setBookingSuccess(null);
    onClose();
  };

  if (!isOpen) return null;

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={handleClose} />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-[#363940] rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#F5F6FA]">
                {bookingSuccess ? "Booking Confirmed!" : "Book Consultation"}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {bookingSuccess ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white text-lg mb-2">Your consultation has been booked successfully!</p>
                  <p className="text-gray-400 text-sm">We will contact you shortly to confirm your appointment.</p>
                </div>

                <div className="bg-dark-tertiary rounded-lg p-4 space-y-3">
                  <h4 className="text-white font-semibold">Booking Details:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white">{bookingSuccess.details.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Service:</span>
                      <span className="text-white">{bookingSuccess.details.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date:</span>
                      <span className="text-white">{bookingSuccess.details.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time:</span>
                      <span className="text-white">{bookingSuccess.details.time}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-tertiary rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Meeting Link:</h4>
                  <p className="text-gray-400 text-sm mb-3">Use this link to join your consultation at the scheduled time:</p>
                  <Button
                    onClick={() => window.open(bookingSuccess.meetLink, '_blank')}
                    className="w-full bg-accent-grey hover:bg-accent-grey/80 text-white"
                  >
                    Open Meeting Link
                  </Button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Link: {bookingSuccess.meetLink}
                  </p>
                </div>

                <Button
                  onClick={handleClose}
                  className="w-full bg-dark-border hover:bg-dark-border/80 text-white"
                >
                  Close
                </Button>
              </div>
            ) : (

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your full name"
                          className="bg-dark-tertiary border-dark-border text-white placeholder-gray-400 focus:border-accent-grey"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your@email.com"
                          className="bg-dark-tertiary border-dark-border text-white placeholder-gray-400 focus:border-accent-grey"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="bg-dark-tertiary border-dark-border text-white placeholder-gray-400 focus:border-accent-grey"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Service</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-dark-tertiary border-dark-border text-white focus:border-accent-grey">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-dark-tertiary border-dark-border">
                          <SelectItem value="company-registration">Company Registration</SelectItem>
                          <SelectItem value="gst-registration">GST Registration</SelectItem>
                          <SelectItem value="tax-filing">Tax Filing</SelectItem>
                          <SelectItem value="copyright-registration">Copyright Registration</SelectItem>
                          <SelectItem value="accounting-services">Accounting Services</SelectItem>
                          <SelectItem value="legal-compliance">Legal Compliance</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Preferred Date</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="date"
                          min={today}
                          className="bg-dark-tertiary border-dark-border text-white focus:border-accent-grey"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Preferred Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-dark-tertiary border-dark-border text-white focus:border-accent-grey">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-dark-tertiary border-dark-border">
                          <SelectItem value="09:00">09:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="14:00">02:00 PM</SelectItem>
                          <SelectItem value="15:00">03:00 PM</SelectItem>
                          <SelectItem value="16:00">04:00 PM</SelectItem>
                          <SelectItem value="17:00">05:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          value={field.value ?? ''}
                          rows={3}
                          placeholder="Any specific requirements or questions..."
                          className="bg-[#393B41] border-[#45474D] text-[#F5F6FA] placeholder-[#AEB0B8] focus:border-[#5b91e1]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4 mt-8">
                  <Button
                    type="button"
                    onClick={onClose}
                    variant="outline"
                    className="flex-1 border-dark-border text-gray-300 hover:bg-dark-tertiary"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={bookingMutation.isPending}
                    className="flex-1 bg-[#45474D] text-[#F5F6FA] hover:bg-[#F5F6FA] hover:text-[#282A2E] transition-all duration-150 font-semibold"
                  >
                    {bookingMutation.isPending ? "Booking..." : "Book Consultation"}
                  </Button>
                </div>
              </form>
            </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
