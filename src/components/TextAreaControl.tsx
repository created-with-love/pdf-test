import {Description, Field, Label, Textarea} from '@headlessui/react'
import {clsx} from "clsx";
import {FC} from "react";

export const TextAreaControl: FC = () => {
    return (
        <div className="w-full max-w-xxl px-4 py-4 mt-5">
            <Field>
                <Label className="block text-lg/6 font-medium mb-2.5">PDF генератор</Label>
                <Description className="text-sm/6">Введіть текст та натисніть кнопку "Конвертувати", щоб згенерувати Ваш PDF файл</Description>
                <Textarea
                    className={clsx(
                        'mt-3 block w-full resize-none rounded-lg py-1.5 px-3 text-sm/6 bg-gray-100',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                    rows={8}
                    name="pdfText"
                />
            </Field>
        </div>
    )
}
