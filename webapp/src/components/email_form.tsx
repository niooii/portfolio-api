"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
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
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    username: z.string().min(1, {
        message: "Email cannot be empty.",
    }),
})

export function EmailForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
        username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "Your email has been sent successfully!",
        })
    }

return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                <Textarea placeholder="..." className="" spellCheck={true} rows={10} {...field} />
                </FormControl>
                <FormDescription>
                This will be sent to <a href="https://mail.google.com/mail/u/0/?fs=1&to=wangh3@bxscience.edu&tf=cm" target="_blank" className="underline">wangh3@bxscience.edu</a>.
                </FormDescription>
                <FormMessage />
            </FormItem>
            )}
        />
        <Button type="submit">Send</Button>
        </form>
    </Form>
    )
}
