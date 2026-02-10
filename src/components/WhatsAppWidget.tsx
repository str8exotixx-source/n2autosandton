import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/27818880888"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <svg 
        viewBox="0 0 32 32" 
        className="h-6 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 32l6.826-2.192A15.91 15.91 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.318 22.59c-.388 1.094-1.938 2.002-3.168 2.266-.842.18-1.94.322-5.64-1.212-4.732-1.962-7.78-6.756-8.014-7.07-.226-.314-1.9-2.532-1.9-4.83s1.202-3.43 1.628-3.9c.35-.388.924-.574 1.476-.574.178 0 .338.01.482.018.426.018.64.044.92.712.35.838 1.2 2.924 1.306 3.138.106.214.214.5.072.788-.134.296-.25.428-.464.678-.214.25-.418.442-.632.712-.196.232-.416.482-.178.944.238.456 1.058 1.746 2.272 2.828 1.562 1.392 2.878 1.824 3.284 2.028.314.16.688.134.938-.134.316-.34.706-.902 1.104-1.456.282-.396.64-.446.986-.304.352.134 2.23 1.052 2.612 1.244.382.192.636.286.73.448.092.16.092.926-.296 2.02z"/>
      </svg>
      <span className="font-semibold text-sm">WhatsApp Us</span>
    </a>
  );
};

export default WhatsAppWidget;
