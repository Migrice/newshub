import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Params, Source } from "../../models";
import Select, { MultiValue } from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type FilterSectionProps = {
  sources: Source[];
  updateParams: React.Dispatch<React.SetStateAction<Params>>;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
};

type OptionType = {
  value: string;
  label: string;
};

const languageOptions: OptionType[] = [
  { value: "ar", label: "Arabe" },
  { value: "de", label: "Allemand" },
  { value: "en", label: "Anglais" },
  { value: "es", label: "Espagnol" },
  { value: "fr", label: "Français" },
  { value: "he", label: "Hebreux" },
  { value: "it", label: "Italien" },
  { value: "nl", label: "Néerlandais" },
  { value: "no", label: "Norvégien" },
  { value: "pt", label: "Portugais" },
  { value: "ru", label: "Russe" },
  { value: "sv", label: "Suédois" },
  { value: "zh", label: "Chinois" },
];

const sortByOptions: OptionType[] = [
  { value: "relevancy", label: "Relevancy" },
  { value: "popularity", label: "Popularity" },
  { value: "publishedAt", label: "Published At" },
];

const FilterSection: React.FC<FilterSectionProps> = ({
  sources,
  updateParams,
  handleClose,
}) => {
  const sourceOptions: OptionType[] = sources.map((src) => ({
    label: src.name,
    value: src.id,
  }));

  const { handleSubmit, control } = useForm<Params>();

  const onSubmit: SubmitHandler<Params> = (data) => {
    updateParams((prev) => ({
      ...prev,
      ...data,
    }));
    handleClose(false);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-screen flex-col gap-10"
      >
        <div className="ml-1 flex flex-col lg:flex-row">
          <label htmlFor="source" className="flex-1 p-1">
            Source
          </label>
          <Controller
            control={control}
            name="sources"
            render={({ field }) => (
              <Select<OptionType, true>
                {...field}
                isMulti
                options={sourceOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="select sources "
                closeMenuOnSelect={false}
                value={sourceOptions.filter((option) =>
                  field.value?.split(",").includes(option.value),
                )}
                onChange={(selected: MultiValue<OptionType>) => {
                  const values = selected
                    .map((option) => option.value)
                    .join(",");
                  field.onChange(values);
                }}
              />
            )}
          />
        </div>

        <div className="ml-1 flex flex-col lg:flex-row">
          <label htmlFor="language" className="flex-1 p-1">
            Language
          </label>

          <Controller
            control={control}
            name="language"
            render={({ field }) => (
              <Select
                {...field}
                options={languageOptions}
                classNamePrefix="select"
                placeholder="select language "
                onChange={(lang) => field.onChange(lang?.value)}
                value={languageOptions.find((opt) => opt.value === field.value)}
              />
            )}
          />
        </div>

        <div className="ml-1 flex flex-col lg:flex-row">
          <label htmlFor="sortBy" className="flex-1 p-1">
            Sort By
          </label>

          <Controller
            control={control}
            name="sortBy"
            render={({ field }) => (
              <Select
                {...field}
                options={sortByOptions}
                classNamePrefix="select"
                placeholder="sort "
                onChange={(srtby) => field.onChange(srtby?.value)}
                value={sortByOptions.find((opt) => opt.value === field.value)}
              />
            )}
          />
        </div>

        <div className="ml-1 flex flex-col lg:flex-row">
          <label htmlFor="from" className="flex-1 p-1">
            From
          </label>

          <Controller
            control={control}
            name="from"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                className="max-w-26 items-center border border-[#cccccc] py-2"
                placeholderText="start date"
                showTimeSelect
                isClearable
                selectsStart
                maxDate={new Date()}
                dateFormat="Pp"
              />
            )}
          />
        </div>

        <div className="ml-1 flex flex-col lg:flex-row">
          <label htmlFor="from" className="flex-1 p-1">
            To
          </label>

          <Controller
            control={control}
            name="to"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                className="max-w-26 items-center border border-[#cccccc] py-2"
                placeholderText="end date"
                showTimeSelect
                isClearable
                selectsEnd
                maxDate={new Date()}
                dateFormat="Pp"
              />
            )}
          />
        </div>

        <button
          className="mt-10 mr-2 ml-2 rounded-sm bg-[#d85a5c] p-2 text-white hover:bg-red-300"
          type="submit"
        >
          Filter
        </button>
      </form>
    </div>
  );
};

export default FilterSection;
