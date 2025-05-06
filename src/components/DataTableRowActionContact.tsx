import { Row } from '@tanstack/react-table';
import { Eye } from "lucide-react"


interface DataTableRowActionsContactProps<TData> {
  row: Row<TData>;
  onDelete: (value: TData) => void;
}

const DataTableRowActionsContact = <TData,>({ row,  onDelete }: DataTableRowActionsContactProps<TData>) => {
  return (
    <div className=" flex gap-2  items-center hover: cursor-pointer " >
      <Eye  onClick={ () => onDelete(row.original)}   />
</div>  
  );
};

export default DataTableRowActionsContact;