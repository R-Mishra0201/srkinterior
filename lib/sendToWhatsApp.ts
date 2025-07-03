export default function sendToWhatsApp(name: string, message: string, phone?: string) {
  const businessPhone = "9599367759"; // Replace with actual business WhatsApp number
  
  let whatsappMessage = `🏠 *New Design Inquiry*\n\n`;
  whatsappMessage += `👤 *Name:* ${name}\n`;
  if (phone) {
    whatsappMessage += `📱 *Phone:* ${phone}\n`;
  }
  whatsappMessage += `💬 *Message:* ${message}\n\n`;
  whatsappMessage += `---\n`;
  whatsappMessage += `Sent from Shah Rukh Khan Interiors website`;
  
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodedMessage}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");
}