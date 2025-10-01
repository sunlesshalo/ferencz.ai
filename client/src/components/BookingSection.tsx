import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function BookingSection() {
  const { t } = useTranslation();
  useEffect(() => {
    // Cal.com embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30min", {origin:"https://app.cal.com"});
      Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="foglalas" className="py-8 flex flex-col items-center space-y-2">
      <h2 className="sr-only">Foglalás</h2>
      <Button 
        variant="outline"
        size="lg"
        className="hover-elevate push-effect shadow-sm px-8 py-3 border-2 border-gray-800 dark:border-gray-400"
        data-testid="button-booking"
        data-cal-link="ferencz-csuszner/30min"
        data-cal-namespace="30min"
        data-cal-config='{"layout":"month_view"}'
      >
        {t('booking.button')}
      </Button>
      <p className="text-[10px] text-muted-foreground text-center max-w-[160px] leading-tight" data-testid="text-consultation-info">
        {t('booking.consultation')}
      </p>
    </section>
  );
}