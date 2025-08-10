import { cn } from "@src/libs/helper";

const TableErrorUI = ({
    title = "Couldn't retrieve the data.",
    wrapper = "",
    description,
}) => {
    return (
        <div className={cn("py-20 flex_center flex-col gap-3 w-full", wrapper)}>
            {/* <OctagonAlert size={54} className="text-red-400" /> */}
            <div>
                <p className="text-2xl font-medium !leading-[1.4] text-text-600 mt-2">
                    {title}
                </p>
                {description && (
                    <p className="text-base font-normal !leading-normal text-text-200 mt-[2px]">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

export default TableErrorUI;