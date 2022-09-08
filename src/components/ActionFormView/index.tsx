import React, { ReactElement, useState } from 'react';
import { useDrop } from 'react-dnd';
import {getActionFormItem} from '@/utils/actionForm'
import ActionFormViewRow from '../ActionFormViewRow';
import { Button } from 'antd';
import { useGetState } from 'ahooks';






const ActionFormView: React.FC = () => {
  const [renderItem, setRenderItem] = useState<ReactElement[]>([]);
  const [actionFormData, setActionFormData,getActionFormItemValue] = useGetState<Record<string,any>[]>([]);

  const generateNewActionFormRow = (item: ReactElement, key: number) => {
    return <ActionFormViewRow initItem={item} key={key} rowNumber={key} setActionFormData={setActionFormData}/>
  }
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'ActionFormItem',
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item, monitor) => {
      if(monitor.didDrop()){
        return;
      }
      console.log("actionDormData",getActionFormItemValue());
      const key = getActionFormItemValue().length;
      const newItem = generateNewActionFormRow(getActionFormItem(item as Record<string,object>),key);
      setRenderItem(pre => [...pre, newItem]);
      setActionFormData(preData => {return [...preData,{RowNumber:key,item:[item]}]});
    },
  }));


  return (
    <>
    <div
      ref={drop}
      role={'Dustbin'}
      style={{
        backgroundColor: isOver ? 'red' : 'white',
        border: '3px red solid',
        width: '100%',
        minHeight: 200,
        paddingBottom: 64,
        paddingTop:4
      }}
    >
      {renderItem.map(item => {
        return item;
      })}
    </div>
      <Button onClick={() => console.log(actionFormData)}>OutPut FormData</Button>
    </>
    
  );
};

export default ActionFormView;
