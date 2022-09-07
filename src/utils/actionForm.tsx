import { Form, Input, Select } from "antd";
import { ReactElement } from "react";

export const getActionFormItem = (ItemData:Record<string,any>):ReactElement => {
    console.log(ItemData);
     const {type, name, label, componentProps} = ItemData;
     switch (type) {
      case "Input":
        return  <Form.Item label={label} name={name}>
            <Input></Input>
          </Form.Item>
      case "Select":
        return <Form.Item label={label} name={name}>
          <Select {...componentProps}>
  
          </Select>
        </Form.Item>
      default:
        return <></>
     }
  };


