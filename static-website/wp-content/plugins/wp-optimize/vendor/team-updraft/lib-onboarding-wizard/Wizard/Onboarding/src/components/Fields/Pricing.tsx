<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html><head><meta charset="UTF-8"></head><body><p>import { memo } from '@wordpress/element';
import FieldWrapper from './FieldWrapper';
import Icon from '../../utils/Icon';

interface PricingPlan {
    storage: string;
    description: string;
    price: string;
    period: string;
    button: string;
    card_class?: string;
    button_class?: string;
    icon?: string;
    icon_size?: number;
    icon_color?: string;
    url?: string;
}

interface PricingFieldConfig {
    id: string;
    label?: string;
    context?: any;
    context_html?: string;
    title?: string;
    title_class?: string;
    grid_class?: string;
    url?: string;
    plans?: PricingPlan[];
    default_card_class?: string;
    default_button_class?: string;
    default_icon?: string;
    default_icon_size?: number;
    default_icon_color?: string;
    [key: string]: any;
}

interface PricingProps {
    field: PricingFieldConfig;
    value?: any;
    onChange?: (value: any) =&gt; void;
}

const Pricing = ({ field }: PricingProps) =&gt; {
    const {
        title = '',
        title_class = 'text-[17px] mb-[14px] text-gray-900 mt-0',
        grid_class = 'grid grid-cols-2 gap-[10px]',
        url = '',
        plans = [],
        default_card_class = 'bg-gray-100 border-gray-300',
        default_button_class = 'rounded-xl bg-white text-gray-900 border border-gray-300 hover:bg-gray-100',
        default_icon = '',
        default_icon_size = 8,
        default_icon_color = 'currentColor',
    } = field;

    const renderPlanCard = (plan: PricingPlan, index: number) =&gt; {
        const cardClass = plan.card_class || default_card_class;
        const buttonClass = plan.button_class || default_button_class;
        const icon = plan.icon || default_icon;
        const iconSize = plan.icon_size !== undefined ? plan.icon_size : default_icon_size;
        const iconColor = plan.icon_color || default_icon_color;
        const planUrl = plan.url || url;

        return (
            </p><div key="{index}" classname="{`p-[14px]" rounded- shadow-sm border flex flex-col justify-between>
                <div>
                    <h2 classname="text-[19px] font-bold mb-[5px] mt-0 !text-[#C4511C]">
                        {plan.storage}
                    </h2>
                    <p classname="text-[15px] text-gray-600 mb-[10px] leading-[1.4]">
                        {plan.description}
                    </p>
                </div>

                <div classname="mt-auto">
                    <div classname="mb-[10px]">
                        <span classname="text-[24px] font-bold text-gray-900">
                            {plan.price}
                        </span>
                        <span classname="text-[14px] text-gray-500">
                            {plan.period}
                        </span>
                    </div>

                    <a href="https://www.oconnoradv.com/wp-content/plugins/wp-optimize/vendor/team-updraft/lib-onboarding-wizard/Wizard/Onboarding/src/components/Fields/planUrl" target="_blank" rel="noopener noreferrer" classname="{`w-full" py- px- text- font-semibold rounded- cursor-pointer flex items-center justify-center gap- transition-colors>
                        {plan.button}
                        {icon &amp;&amp; (
                            <icon name="{icon}" size="{iconSize}" fill="{iconColor}" classname="inline-block"></icon>
                        )}
                    </a>
                </div>
            </div>
        );
    };

    return (
        <fieldwrapper inputid="{field.id}" label="{field.label" context="{field.context}" contexthtml="{field.context_html">
            <div classname="w-full">
                <hr classname="mb-[10px] mt-[10px]">

                {title &amp;&amp; (
                    <h1 classname="{title_class}">
                        {title}
                    </h1>
                )}
                
                <div classname="{grid_class}">
                    {plans.map((plan, index) =&gt; renderPlanCard(plan, index))}
                </div>
            </div>
        </fieldwrapper>
    );
};

export default memo(Pricing);
</body></html>
