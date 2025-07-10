import { React } from "@vendetta/metro/common";
import { storage } from "@vendetta/storage";
import { SettingPage, SettingText } from "@vendetta/ui/components";

const DEFAULT_PREFIX = "Discord from PS2";

export default function Settings(): React.ReactElement {
  const [prefix, setPrefix] = React.useState(storage.prefix || DEFAULT_PREFIX);

  const onChange = (text: string) => {
    setPrefix(text);
    storage.prefix = text;
  };

  return (
    <SettingPage title="Discord from PS2 Settings">
      <SettingText
        label="Message Prefix"
        description="Text prepended to every message you send."
        value={prefix}
        onChangeText={onChange}
        placeholder={DEFAULT_PREFIX}
      />
    </SettingPage>
  );
}
