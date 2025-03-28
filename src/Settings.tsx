import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";
import { General } from "@vendetta/ui/components";

const { FormSwitchRow, FormInput } = General;

export default function Settings() {
    useProxy(storage);

    return (
        <>
            <FormSwitchRow
                label="Enable Auto-Append"
                value={storage.settings.enabled}
                onValueChange={(value) => (storage.settings.enabled = value)}
            />
            <FormInput
                title="Custom Text"
                placeholder="Enter your custom message"
                value={storage.settings.customText}
                onChange={(value) => (storage.settings.customText = value)}
            />
        </>
    );
}
