export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  // Mock implementation - just console.log and return success
  console.log("Contact form submitted:", data);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    message: "Zpráva byla úspěšně odeslána. Ozveme se vám do 24 hodin.",
  };
}
