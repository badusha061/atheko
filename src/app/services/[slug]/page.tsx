"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import React from "react";
import { ServiceUI } from "@/types/type";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import libphonenumber from "google-libphonenumber"; 
import { CalendarField } from "@/components/calender/calender-field";
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import {  toast } from 'sonner';
import { Loader2 } from "lucide-react"


const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();


const formSchema = z.object({
  username: z.string().min(2).max(50),
  number : z.string()
            .nonempty({
                message : "Mobile number is required"
            })
            .refine(
            (mobile) => {
                try{
                    const phoneNumber = phoneUtil.parse(mobile); 
                    return phoneUtil.isValidNumber(phoneNumber);
                }catch(err : unknown){
                    const error = err as Error 
                    console.log(error)
                    return false 
                }
            }),
  place: z.string().min(5).max(50),
  scheduledDate: z.date({
    required_error: "A date of birth is required.",
  }),
  scheduledTime :z
    .string({
      required_error: "Time is required",
    })
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: "Time must be in HH:mm format",
    }),
  commands : z.string()
      
})



export default function ServiceDetailPage() {
    const relatedServices = [
      { id: 1, title: "Service 1" },
      { id: 2, title: "Service 2" },
      { id: 3, title: "Service 3" },
      { id: 4, title: "Service 4" },
    ];

    const searchParams = useSearchParams();
    const data = searchParams.get("data");

    let service: ServiceUI | null = null;

    if (data) {
      try {
        service = JSON.parse(decodeURIComponent(data));
      } catch (error) {
        console.error("Error parsing service data:", error);
      }
    }

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
      mode: "onTouched"
    })

    const {isSubmitting} = form.formState
    


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const sheduleDate = values.scheduledDate 
        const currentDate = new Date()
        if(sheduleDate > currentDate){
            const payload = {
              "username":values.username,
              "number":values.number,
              "place":values.place,
              "scheduledDate":values.scheduledDate,
              "scheduledTime":values.scheduledTime,
              "commands":values.commands,
              "service":service?._id
            } 
            try{
                  const response = await axios.post(`/api/booking/`,JSON.stringify(payload),{headers: {'Content-Type': 'application/json'}}); 
                if(response.status == 201){
                    toast.success("Thank you! Your service has been scheduled successfully. We’ll get back to you shortly.");
                    form.reset()
                  }else{
                      toast.error(response.data.message);
                  }
              }catch (error : unknown){
                if(error instanceof Error){
                    toast.error(error.message);
                }else{
                    toast.error("Something Went Wrong Please Try Again.")                            
                }
              }
        }else{
          toast.error("Please select a valid future date. Scheduling a service for today or a past date is not allowed.")  
        }
    }


  return (
    <div className="flex flex-col items-center justify-center h-full p-5 md:p-10">
      {service && (
        <div className="relative h-[40vh] w-full rounded-md overflow-hidden md:h-[50vh] transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <Image
            src={service.serviceBanner.url  || ""}
            alt="Service Image"
            fill
            className="rounded-2xl object-cover"
          />
         <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 font-bold text-white py-2 px-6 rounded-2xl shadow hover:bg-blue-600 transition duration-200">
        Schedule Pick Up
      </Button>
    </AlertDialogTrigger>

  <AlertDialogContent className="max-h-[80vh] overflow-y-auto" >
    <AlertDialogHeader>
      <div  className=" flex  justify-between" >
        <AlertDialogTitle>
          Schedule Your Appointment 
        </AlertDialogTitle>
          <Image 
            src={"/core/Atheko-1.svg"}
            alt="About Us"
            width={75}
            height={75}
            className="rounded-md transition-transform duration-300 hover:scale-105"
            />
      </div>
      <AlertDialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+971-XX-1234567"
                            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>This is your public Phone Number.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="place"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Place</FormLabel>
                        <FormControl>
                          <Input placeholder="Kozhikode" {...field} />
                        </FormControl>
                        <FormDescription>This is your place of residence.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}  
                  />

                  <FormField
                    control={form.control}
                    name="scheduledDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <CalendarField value={field.value} onChange={field.onChange} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="scheduledTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Schedule Time</FormLabel>
                        <FormControl>
                          <Input type="time" placeholder="eg: 12:00 AM" {...field} />
                        </FormControl>
                        <FormDescription>This is your place of residence.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}  
                  />

                   <FormField
                    control={form.control}
                    name="commands"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Commands</FormLabel>
                        <FormControl>
                          <Textarea placeholder="You have something to us."  {...field} />
                        </FormControl>
                        <FormDescription>This is your place of residence.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}  
                  />



            <div className="flex justify-end">
              <Button type="submit" className={`w-full px-6 hover:cursor-pointer py-3 mt-4 text-sm  tracking-wide text-white capitalize transition-colors duration-300 transform bg-[rgb(8,116,156)] rounded-lg hover:bg-[rgb(8,116,156)] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                    {isSubmitting ? 
                        <Button className={`w-full  bg-[rgb(8,116,156)] rounded-lg hover:bg-[rgb(8,116,156)] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`} disabled>
                            < Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>
                    : "Schedule Service"}
                </Button>
            </div>
          </form>
        </Form>
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel className="w-full" >Cancel</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

        </div>
      )}

      {service ? (
        <div className="mt-5 md:mt-10 flex flex-col px-5 md:px-10">
          <h2 className="text-2xl md:text-4xl font-bold">{service.serviceName}</h2>
          <p className="mt-5 text-lg md:text-2xl">{service.serviceDescription}</p>

          <h1 className="mt-5 text-xl text-blue-600 font-bold">
            Cleaning Steps
          </h1>
          {service.servicePoints &&
          Array.isArray(service.servicePoints) &&
          service.servicePoints.length > 0 ? (
            <ul className="mt-5 list-disc list-inside">
              {service.servicePoints.map((point, index) => (
                <li key={index} className="text-lg">
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p>No bullet points available.</p>
          )}

          <div className="mt-10 flex flex-col md:flex-row w-full max-w-4xl justify-between">
            {/* Related Services */}
            <div className="mb-5 md:mb-0">
              <h1 className="text-xl text-blue-600 font-bold">
                Related Services
              </h1>
              <ul className="mt-5 list-disc list-inside">
                {relatedServices.map((service, index) => (
                  <li key={index} className="text-lg">
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* How Laundrology Works */}
            <div>
              <h1 className="text-xl text-blue-600 font-bold">
                How Laundrology Works
              </h1>
              <p className="mt-5 text-lg max-w-xl">
                You can either schedule a pickup through our website or visit
                our Laundrology Stores and get a special discount.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>No service data available.</p>
      )}
    </div>
  );
}
