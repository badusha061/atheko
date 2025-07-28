'use client'

import React from 'react'
import { Poppins  , Inter} from 'next/font/google';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from "axios"
import {  z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form" 
import { Input } from "@/components/ui/input" 
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import libphonenumber from "google-libphonenumber"; 
import {  toast } from 'sonner';
import { Button } from '@/components/ui/button';



const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

const formSchema = z.object({
  fullName: z.string().min(4, {
    message: "Full Name must be at least 4 characters.",
  }),
  email: z.string().email({
    message: 'Email is required.'
  }),
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
  message : z.string()
            .min(6,{
                message: "Message must be at least 6 characters.",

            })
            .max(280 , {
                message: "Message must not be more 280 characters.",  
            })
    })




const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], 
    });

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'], 
    });



function ContactHome() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
        },
        mode: "onTouched"
    })

    const {isSubmitting} = form.formState

    const handleSubmitButton = async (values: z.infer<typeof formSchema>) => {
            if(values){
                try{
                    const response = await axios.post(`/api/contact/`,JSON.stringify(values),{headers: {'Content-Type': 'application/json'}}); 
                    if(response.status == 201){
                        toast.success("Thank you! Your message has been sent successfully. We’ll get back to you shortly.");
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
                return false 
            }
    }

  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <div>
            <p className={`${poppins.className} text-[rgb(8,116,156)] dark:text-blue-400`}>Contact us</p>

            <h1 className={`${poppins.className} mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white`}>Chat to our friendly team</h1>

            <p className={`${inter.className} mt-3 text-gray-500 dark:text-gray-400`}>We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span className="inline-block p-3 text-[rgb(8,116,156)] rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className={`${poppins.className} mt-4 text-base  text-gray-800 dark:text-white`}>Email</h2>
                    <p className={`${inter.className} mt-2 text-sm text-gray-500 dark:text-gray-400`}>Our friendly team is here to help.</p>
                    <p className={`${inter.className} mt-2 text-sm text-[rgb(8,116,156)] dark:text-blue-400`}>alrawdatechnicals@gmail.com</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-[rgb(8,116,156)] rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className={`${poppins.className} mt-4 text-base  text-gray-800 dark:text-white`}>Live chat</h2>
                    <p className={`${inter.className} mt-2 text-sm text-gray-500 dark:text-gray-400`}>Our friendly team is here to help.</p>
                    <p className={`${inter.className} mt-2 text-sm text-[rgb(8,116,156)] dark:text-blue-400`}>Start new chat</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-[rgb(8,116,156)] rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className={`${poppins.className} mt-4 text-base  text-gray-800 dark:text-white`}>Office</h2>
                    <p className={`${inter.className} mt-2 text-sm text-gray-500 dark:text-gray-400`}>Come say hello at our office HQ.</p>
                    <p className={`${inter.className} mt-2 text-sm text-[rgb(8,116,156)] dark:text-blue-400`}>AL RAWDA Techincal Services Al Hayl Fujariah UAE</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-[rgb(8,116,156)] rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className={`${poppins.className} mt-4 text-base  text-gray-800 dark:text-white`}>Phone</h2>
                    <p className={`${inter.className} mt-2 text-sm text-gray-500 dark:text-gray-400`}>Mon-Sta from 8am to 5pm.</p>
                    <p className={`${inter.className} mt-2 text-sm text-[rgb(8,116,156)] dark:text-blue-400`}>971 502509383</p>
                    <p className={`${inter.className} mt-2 text-sm text-[rgb(8,116,156)] dark:text-blue-400`}>971 543945593</p>
                    <p className={`${inter.className} mt-2 text-sm text-[rgb(8,116,156)] dark:text-blue-400`}>092227975</p>
                </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">

            <Form {...form}>
                <form  onSubmit={form.handleSubmit(handleSubmitButton)}>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className={`${poppins.className} block mb-2 text-sm text-gray-600 dark:text-gray-200`} >Full Name</FormLabel>
                                <FormControl>
                                    <Input  placeholder="John" className={`${inter.className} block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}   {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <FormField
                                control={form.control}
                                name="number"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className={`${poppins.className} block mb-2 text-sm text-gray-600 dark:text-gray-200`} >Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+971-XX-1234567" className={`${inter.className} block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}   {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                        </div>
                    </div>

                    <div className="mt-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className={`${poppins.className} block mb-2 text-sm text-gray-600 dark:text-gray-200`} >Email Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="johndoe@example.com" className={`${inter.className} block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}   {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                        </div>
                        <div className="w-full mt-4"> 
                            <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel className={`${poppins.className} block mb-2 text-sm text-gray-600 dark:text-gray-200`} >Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Message" className={`${inter.className} block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}   {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                        </div>                    
                        <Button type="submit" className={`${poppins.className} w-full px-6 hover:cursor-pointer py-3 mt-4 text-sm  tracking-wide text-white capitalize transition-colors duration-300 transform bg-[rgb(8,116,156)] rounded-lg hover:bg-[rgb(8,116,156)] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                            {isSubmitting ? 
                                <Button className={`${poppins.className} w-full  bg-[rgb(8,116,156)] rounded-lg hover:bg-[rgb(8,116,156)] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`} disabled>
                                    < Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </Button>
                            : "Send message"}
                        </Button>

                    </form> 
            </Form> 

            </div>
        </div>
    </div>
</section>
  )
}

export default ContactHome