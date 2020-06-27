import { writable, Writable } from "svelte/store";
import { FORMAT_TYPES, CODEC_TYPES, ConfigOptions } from "./configuration";
import { HardwareDataType } from "../types/hardwareData";
const defaultFiles: File[] = [];

export const fileUploaded = writable(defaultFiles);

export const terminalText = writable("");

export const loadedStore = writable(false);

export const transcoded = writable("");

export const clearTerminal = writable(false);

export const videoDisplay = writable(false);

export const submit = writable(false);

export const showConfig = writable(false);

export const processed = writable(false);

export const progressStore = writable(1);

export const progressType: Writable<"Transcode" | "Compress"> = writable(
  "Transcode"
);

export const sliderStore = writable(0);

export const hardwareData: Writable<HardwareDataType | null> = writable(null);

export const config = writable({
  /**
   * The format for FFmpeg to convert to
   */

  format: FORMAT_TYPES.MP4,
  /**
   * The video codec used for compression
   */

  codec: CODEC_TYPES.H264,

  /**
   * The amount of compression to apply. The range of acceptable values is based
   * on the codec.
   *
   */
  compressionLevel: 0,
});

/**
 * Sets the config option in state for the given type as val
 */
export const configSetOption = (type: ConfigOptions, val: any) => {
  const temp: any = {};
  /**
   * Error Caught Here, Expected
   * type ConfigurationType = {
   * format : FormatType,
   * codec: CodecType
   * }
   * Enum has Codec and Format, Mis Matched Case
   */

  temp[ConfigOptions[type].toLowerCase()] = val;
  config.update((state) => Object.assign({}, state, temp));
};
