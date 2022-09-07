import React, { ReactElement, useState } from 'react';
import { useDrop } from 'react-dnd';
import {getActionFormItem} from '@/utils/actionForm'
import ActionFormViewRow from '../ActionFormViewRow';



const testItem = <div>23333</div>

const generateNewActionFormRow = (item: ReactElement) => {
  return <ActionFormViewRow initItem={item}/>
}

const ActionFormView: React.FC = () => {
  const [renderItem, setRenderItem] = useState<ReactElement[]>([testItem]);

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
      const newItem = generateNewActionFormRow(getActionFormItem(item as Record<string,object>));
      setRenderItem(pre => [...pre, newItem]);
    },
  }));


  return (
    <div
      ref={drop}
      role={'Dustbin'}
      style={{
        backgroundColor: isOver ? 'red' : 'white',
        border: '3px red solid',
        width: '100%',
      }}
    >
      {renderItem.map(item => {
        return item;
      })}
    </div>
  );
};

export default ActionFormView;
