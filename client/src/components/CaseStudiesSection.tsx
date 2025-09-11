import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CaseStudiesSection() {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold tracking-tight" data-testid="text-case-studies-title">
          Esettanulmányok
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto" data-testid="text-case-studies-description">
          Valós példák arra, hogyan segítettem vállalkozásoknak az AI bevezetésével jelentős eredményeket elérni.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4" data-testid="accordion-case-studies">
        <AccordionItem value="physiotherapy-clinic" className="border rounded-lg px-6">
          <AccordionTrigger 
            className="text-left hover:no-underline py-6"
            data-testid="trigger-case-study-physiotherapy"
          >
            <span className="font-medium">
              Fizioterápiás rendelő értékesítési folyamatának automatizálása – +62% több lead, 83%-kal gyorsabb visszahívás
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4" data-testid="content-case-study-physiotherapy">
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Probléma:</h4>
                <p className="text-muted-foreground">
                  A rendelőben a recepciósok manuálisan kezelték a hirdetésekből érkező érdeklődőket. 
                  A visszahívások átlagosan 45–60 percet késtek, így számos lead elveszett, miközben az 
                  adminisztráció túl sok időt vitt el.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Megoldás:</h4>
                <p className="text-muted-foreground">
                  A rendszerben a leadek adatai automatikusan rögzítésre kerülnek, erről a recepciósok 
                  azonnali értesítést, az érdeklődők pedig azonnali visszaigazolást kapnak. A hívások 
                  státuszát a recepciósok rögzítik. Ha szükséges, a rendszer további hívásokat ütemez. 
                  A rendelő vezetője valós időben monitorozza a reakcióidőt és a konverziós arányokat. 
                  Mindezt két Make.com integráció, két Google Sheets táblázat és Google Apps Script kód 
                  biztosítja, amelyek zökkenőmentesen összekapcsolják az űrlapokat, az értesítéseket és 
                  az utánkövetést.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Eredmény:</h4>
                <p className="text-muted-foreground">
                  A leadek száma <span className="font-semibold text-foreground">62%-kal nőtt</span>, 
                  a visszahívási idő 48 percről 8 percre csökkent (
                  <span className="font-semibold text-foreground">83%-os gyorsulás</span>), miközben a 
                  recepciósok adminisztratív terhei <span className="font-semibold text-foreground">80%-kal 
                  mérséklődtek</span>.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}