import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '' // honeypot field
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Spam check: honeypot
    if (formData.website !== '') {
      alert('Spam gyanú miatt az üzenet nem lett elküldve.');
      return;
    }

    const to = 'csuszner.ferencz@gmail.com';
    const subject = encodeURIComponent('Üzenet a weboldalról');
    const body = encodeURIComponent(`Név: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setIsSent(true);
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', message: '', website: '' });
    setIsSent(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" data-testid="modal-contact">
      <div className="bg-card p-6 rounded-lg max-w-md w-full mx-4">
        <h2 className="text-lg font-semibold mb-4" data-testid="text-modal-title">Kapcsolat</h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name" className="block text-sm mb-1">Név</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              data-testid="input-name"
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm mb-1">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              data-testid="input-email"
            />
          </div>
          <div>
            <Label htmlFor="message" className="block text-sm mb-1">Üzenet</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              data-testid="input-message"
            />
          </div>
          {/* Spam protection: honeypot field */}
          <div className="hidden">
            <Label htmlFor="website">Leave this field empty</Label>
            <Input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between items-center">
            <Button type="submit" variant="ghost" className="text-sm underline" data-testid="button-send">
              Küldés
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              onClick={handleClose}
              className="text-sm underline text-muted-foreground"
              data-testid="button-cancel"
            >
              Mégse
            </Button>
          </div>
          {isSent && (
            <p className="text-sm text-green-600 mt-2" data-testid="text-sent-notice">
              Köszönöm! Nyílt az email kliens – ha nem, <a className="underline" href="mailto:csuszner.ferencz@gmail.com">kattints ide</a>.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}