
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Check, Info } from 'lucide-react';
import { OfferteFormData } from '@/pages/Offerte';

interface ReviewStepProps {
  formData: OfferteFormData;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ formData }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Controleer uw gegevens</h2>
        <p className="text-gray-500 mt-2">Bekijk uw gegevens voordat u de aanvraag verstuurt</p>
      </div>
      
      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-lg font-medium mb-3">Project informatie</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            <div>
              <dt className="text-sm text-gray-500">Type project</dt>
              <dd className="text-sm font-medium">
                {formData.projectType === 'nieuwbouw' && 'Nieuwbouw'}
                {formData.projectType === 'renovatie' && 'Renovatie'}
                {formData.projectType === 'vervanging' && 'Vervanging bestaande kozijnen'}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Type pand</dt>
              <dd className="text-sm font-medium">
                {formData.propertyType === 'woning' && 'Woning'}
                {formData.propertyType === 'bedrijfspand' && 'Bedrijfspand'}
                {formData.propertyType === 'anders' && 'Anders'}
              </dd>
            </div>
            {formData.timeline && (
              <div>
                <dt className="text-sm text-gray-500">Tijdlijn</dt>
                <dd className="text-sm font-medium">{formData.timeline}</dd>
              </div>
            )}
            {formData.budget && (
              <div>
                <dt className="text-sm text-gray-500">Budget</dt>
                <dd className="text-sm font-medium">{formData.budget}</dd>
              </div>
            )}
          </dl>
        </div>
        
        <Separator />
        
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-lg font-medium mb-3">Kozijnen</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {formData.windowTypes.length > 0 && (
              <div className="md:col-span-2">
                <dt className="text-sm text-gray-500">Type kozijnen</dt>
                <dd className="text-sm font-medium">
                  {formData.windowTypes.map((type, index) => (
                    <span key={type}>
                      {type === 'draaikiepraam' && 'Draaikiepraam'}
                      {type === 'vast' && 'Vast raam'}
                      {type === 'schuifraam' && 'Schuifraam'}
                      {type === 'vouwwand' && 'Vouwwand'}
                      {type === 'anders' && 'Anders'}
                      {index < formData.windowTypes.length - 1 && ', '}
                    </span>
                  ))}
                </dd>
              </div>
            )}
            {formData.quantity && (
              <div>
                <dt className="text-sm text-gray-500">Aantal</dt>
                <dd className="text-sm font-medium">{formData.quantity}</dd>
              </div>
            )}
            {formData.dimensions && (
              <div>
                <dt className="text-sm text-gray-500">Afmetingen</dt>
                <dd className="text-sm font-medium">{formData.dimensions}</dd>
              </div>
            )}
            {formData.color && (
              <div>
                <dt className="text-sm text-gray-500">Kleur</dt>
                <dd className="text-sm font-medium">{formData.color}</dd>
              </div>
            )}
            {formData.additionalInfo && (
              <div className="md:col-span-2">
                <dt className="text-sm text-gray-500">Aanvullende informatie</dt>
                <dd className="text-sm font-medium">{formData.additionalInfo}</dd>
              </div>
            )}
          </dl>
        </div>
        
        <Separator />
        
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-lg font-medium mb-3">Contactgegevens</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            <div>
              <dt className="text-sm text-gray-500">Naam</dt>
              <dd className="text-sm font-medium">{formData.firstName} {formData.lastName}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">E-mail</dt>
              <dd className="text-sm font-medium">{formData.email}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Telefoon</dt>
              <dd className="text-sm font-medium">{formData.phone}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-sm text-gray-500">Adres</dt>
              <dd className="text-sm font-medium">{formData.address}, {formData.postalCode} {formData.city}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Contactvoorkeur</dt>
              <dd className="text-sm font-medium">
                {formData.preferredContact === 'email' ? 'Via e-mail' : 'Via telefoon'}
              </dd>
            </div>
            {formData.availability.length > 0 && (
              <div>
                <dt className="text-sm text-gray-500">Beschikbaarheid</dt>
                <dd className="text-sm font-medium">{formData.availability.join(', ')}</dd>
              </div>
            )}
          </dl>
        </div>
        
        <div className="bg-brand-green/10 border border-brand-green/20 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <Info className="text-brand-green mt-0.5 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-medium text-gray-900">Klaar om te verzenden</h4>
              <p className="text-sm text-gray-600 mt-1">
                Klik op 'Offerte aanvragen' hieronder om uw offerte-aanvraag te verzenden. We nemen binnen 24 uur contact met u op.
              </p>
              <ul className="mt-3 space-y-1">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 h-4 w-4 text-brand-green" />
                  <span>Gratis en vrijblijvend</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 h-4 w-4 text-brand-green" />
                  <span>Persoonlijk advies</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="mr-2 h-4 w-4 text-brand-green" />
                  <span>Snelle reactie binnen 24 uur</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
