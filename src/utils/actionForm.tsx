import { Button, Form, Input, Popover, Select } from 'antd';
import { ReactElement } from 'react';

const content = (
  <Form>
    <Form.Item name="fieldName" label="fieldName">
      <Input></Input>
    </Form.Item>
    <Form.Item name="fieldValue" label="fieldValue">
      <Input></Input>
    </Form.Item>
    <Form.Item name="fieldRule" label="fieldRule">
      <Input></Input>
    </Form.Item>
  </Form>
);
export const PopoverHOC: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  return (
    <Popover content={content} title="FieldSetting" trigger="click">
      {children}
    </Popover>
  );
};
export const getActionFormItem = (
  ItemData: Record<string, any>,
): ReactElement => {
  const { type, name, label, componentProps } = ItemData;
  switch (type) {
    case 'Input':
      return (
        <PopoverHOC>
          <Form.Item label={label} name={name} style={{marginLeft: 8, marginRight: 8}} >
            <Input onClick={e => e.stopPropagation()}></Input>
          </Form.Item>
        </PopoverHOC>
      );
    case 'Select':
      return (
        <PopoverHOC>
          <Form.Item label={label} name={name} style={{marginLeft: 8, marginRight: 8}}>
            <Select {...componentProps} style={{width:200}} onClick={e => e.stopPropagation()}></Select>
          </Form.Item>
        </PopoverHOC>
      );
    case 'Button':
    return (
      <PopoverHOC>
        <Form.Item name={name} style={{marginLeft: 8, marginRight: 8}}>
          <Button {...componentProps}>{name}</Button>
        </Form.Item>
      </PopoverHOC>
    );
    default:
      return <></>;
  }
};
