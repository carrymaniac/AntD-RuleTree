import { getActionFormItem } from '@/utils/actionForm';
import { Row } from "antd";
import React,{ Dispatch,ReactElement,SetStateAction,useEffect,useState } from "react";
import { useDrop } from "react-dnd";


type ActionFormViewRowPropType = {
  initItem?: ReactElement;
  rowNumber: number;
  setActionFormData: Dispatch<SetStateAction<Record<string, any>[]>>;
};
const ActionFormViewRow: React.FC<ActionFormViewRowPropType> = ({
  initItem,
  rowNumber,
  setActionFormData,
}) => {
  const [renderItem, setRenderItem] = useState<ReactElement[]>([]);

  useEffect(() => {
    if (initItem) {
      setRenderItem([initItem]);
    }
  }, []);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'ActionFormItem',
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item, monitor) => {
      const newItem = getActionFormItem(item as Record<string, string>);
      setRenderItem((pre) => [...pre, newItem]);
      setActionFormData(pre => {
        return pre.map(p => {
            if (p.RowNumber === rowNumber){
                (p.item as any[]).push(item);
            }
            return p;
        })
      });
    },
  }));

  return (
    <Row
      ref={drop}
      role={'Dustbin'}
      style={{
        backgroundColor: isOver ? 'blue' : 'white',
        border: '0.5px dashed blue',
        width: '100%',
      }}
    >
      {renderItem.map((item) => item)}
    </Row>
  );
};



export default ActionFormViewRow;