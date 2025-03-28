import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";
import { General } from "@vendetta/ui/components";

const { FormInput } = General;

export default function Settings() {
    useProxy(storage);

    return (
        <FormInput
            title="Custom Text"
            placeholder="Enter your custom message"
            value={storage.customText}
            onChange={(value) => (storage.customText = value)}
        />
    );
}
