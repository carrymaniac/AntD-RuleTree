import React, { ReactElement, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import {getActionFormItem} from '@/utils/actionForm'
import { Row } from "antd";


type ActionFormViewRowPropType = {
    initItem?: ReactElement;
}
const ActionFormViewRow:React.FC<ActionFormViewRowPropType> = ({initItem}) => {
    const [renderItem, setRenderItem] = useState<ReactElement[]>([]);

    useEffect(() => {
        if(initItem){
            setRenderItem([initItem])
        }}, [])
    
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
      // The type (or types) to accept - strings or symbols
      accept: 'ActionFormItem',
      // Props to collect
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
      drop: (item, monitor) => {
        const newItem = getActionFormItem(item as Record<string,string>);
        setRenderItem(pre => [...pre, newItem]);
      },
    }));

    return <Row
    ref={drop}
      role={'Dustbin'}
      style={{
        backgroundColor: isOver ? 'blue' : 'white',
        border: '1.5px blue solid',
        width: '100%',
      }}
    >
        {renderItem.map(item => item)}
    </Row>
}



export default ActionFormViewRow;