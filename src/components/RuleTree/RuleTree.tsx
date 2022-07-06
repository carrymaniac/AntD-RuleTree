import { Col, Input, Row, Select, Space } from 'antd';
import React from 'react';
import { MoreOutlined ,PlusOutlined, PlusSquareOutlined} from '@ant-design/icons';



interface RuleTreeProp{
    displayName:string
}

const TreeLine:React.FC = () => {
    return <Row style={{borderWidth:"1px 0 0 1px", borderColor:'rgb(187,197,207)', height:64, width:32,borderStyle:'solid'}}></Row>;
}
    
const RuleTree:React.FC<RuleTreeProp> = ({displayName}) => {
    return (
    <Row align='middle'>
        <Col style={{border:"1px rgb(187,197,207) solid", padding:"4px 32px"}}>
            {displayName}
        </Col>
        <Col>
            <div style={{border:"1px rgb(187,197,207) solid", height:0, width: 32}}></div>
        </Col>
        <Col>
            <TreeLine></TreeLine>
            <TreeLine></TreeLine>
            <TreeLine></TreeLine>
            <Row style={{borderWidth:"0 0 1px 0", borderColor:'rgb(187,197,207)', height:0, width:32,borderStyle:'solid'}}></Row>
        </Col>
        <Col>
            <Row style={{height:64,borderColor:'green',border:"1px rgb(187,197,207) solid", paddingLeft:16, paddingRight:16}} align='middle' gutter={8}>
                <Col>
                <MoreOutlined />
                <MoreOutlined />
                </Col>
                <Col>
                    <Select placeholder="Please Select"></Select> 
                </Col>
                <Col>
                    <Select placeholder="Please Select"></Select> 
                </Col>
                <Col>
                    <Input placeholder="Please Input Count"></Input> 
                </Col>
            </Row>
            <Row style={{height:64,borderColor:'green',border:"1px rgb(187,197,207) solid", paddingLeft:16, paddingRight:16}} align='middle' gutter={8}>
                <Col>
                <MoreOutlined />
                <MoreOutlined />
                </Col>
                <Col>
                    <Select placeholder="Please Select"></Select> 
                </Col>
                <Col>
                    <Select placeholder="Please Select"></Select> 
                </Col>
                <Col>
                    <Input placeholder="Please Input Count"></Input> 
                </Col>
            </Row>
            <Row style={{height:64,borderColor:'green',border:"1px rgb(187,197,207) solid", paddingLeft:16, paddingRight:16}} align='middle' gutter={8}>
                <Col>
                <MoreOutlined />
                <MoreOutlined />
                </Col>
                <Col>
                    <Select placeholder="Please Select"></Select> 
                </Col>
                <Col>
                    <Select placeholder="Please Select"></Select> 
                </Col>
                <Col>
                    <Input placeholder="Please Input Count"></Input> 
                </Col>
            </Row>
            
            <Row style={{height:64,borderColor:'green', paddingRight:16}} align='middle' gutter={8}>
                <Col>
                    <Row style={{height:48, border:'1px dashed rgb(187,197,207)'}} align='middle'>
                        <Col style={{marginLeft:8,marginRight:8}}><PlusOutlined/></Col>
                        <Col style={{marginLeft:8,marginRight:8}}><PlusSquareOutlined/></Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>)
}


export default RuleTree