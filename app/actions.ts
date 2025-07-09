"use server"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Simulate email sending (in a real app, you'd use a service like Resend, SendGrid, etc.)
  try {
    // Here you would integrate with an email service
    // For now, we'll simulate the process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Email would be sent to: enesekici6868@gmail.com")
    console.log("From:", name, email)
    console.log("Subject:", subject)
    console.log("Message:", message)

    return {
      success: true,
      message: "Message sent successfully! I will get back to you soon.",
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to send message. Please try again or contact me directly.",
    }
  }
}
