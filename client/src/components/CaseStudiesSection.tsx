import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import workflowImage from '@assets/image_1757559033972.png';
import { useTranslation } from 'react-i18next';

export default function CaseStudiesSection() {
  const { t } = useTranslation();
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold mb-6" data-testid="text-case-studies-title">
        {t('caseStudies.title')}
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-4" data-testid="accordion-case-studies">
        <AccordionItem value="physiotherapy-clinic" className="border rounded-lg px-6 case-study-item">
          <AccordionTrigger
            className="text-left hover:no-underline py-6"
            data-testid="trigger-case-study-physiotherapy"
          >
            <span className="text-sm">
              {t('caseStudies.physiotherapy.title')}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4" data-testid="content-case-study-physiotherapy">
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('caseStudies.physiotherapy.problem')}</h4>
                <p className="text-muted-foreground">
                  {t('caseStudies.physiotherapy.problemText')}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('caseStudies.physiotherapy.solution')}</h4>
                <p className="text-muted-foreground">
                  {t('caseStudies.physiotherapy.solutionText')}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('caseStudies.physiotherapy.result')}</h4>
                <p className="text-muted-foreground">
                  {t('caseStudies.physiotherapy.resultText')}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="webshop-data" className="border rounded-lg px-6 case-study-item">
          <AccordionTrigger
            className="text-left hover:no-underline py-6"
            data-testid="trigger-case-study-webshop"
          >
            <span className="text-sm">
              {t('caseStudies.webshop.title')}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4" data-testid="content-case-study-webshop">
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('caseStudies.webshop.problem')}</h4>
                <p className="text-muted-foreground">
                  {t('caseStudies.webshop.problemText')}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('caseStudies.webshop.solution')}</h4>
                <p className="text-muted-foreground">
                  {t('caseStudies.webshop.solutionText')}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('caseStudies.webshop.result')}</h4>
                <p className="text-muted-foreground">
                  {t('caseStudies.webshop.resultText')}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="it-blog-automation" className="border rounded-lg px-6 case-study-item">
          <AccordionTrigger
            className="text-left hover:no-underline py-6"
            data-testid="trigger-case-study-it-blog"
          >
            <span className="text-sm">
              {t('caseStudies.itBlog.title')}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-4" data-testid="content-case-study-it-blog">
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('caseStudies.itBlog.problem')}</h4>
                <p className="text-muted-foreground">
                  {t('caseStudies.itBlog.problemText')}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('caseStudies.itBlog.solution')}</h4>
                <p className="text-muted-foreground">
                  {t('caseStudies.itBlog.solutionText')}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('caseStudies.itBlog.result')}</h4>
                <p className="text-muted-foreground">
                  {t('caseStudies.itBlog.resultText')}
                </p>
              </div>

              <div className="mt-6">
                <img
                  src={workflowImage}
                  alt="n8n blog automation workflow diagram"
                  className="w-full rounded-lg border shadow-sm"
                  data-testid="img-workflow-diagram"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}