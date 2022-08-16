import { Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';


export default function SecondIndicatorsRdExplain({ selectedIndicatorsRd }) {
  const IndicatorsRdExplain = {
    "股票代码": ["111", "112"], "12": ["121", "122"], "53": ["131", "132"],
    "21": ["211", "212"], "22": ["221", "222"], "23": ["231", "232"],
    "31": ["311", "312"], "32": ["321", "322"], "33": ["331", "332"],
    "41": ["411", "412"], "42": ["421", "422"], "43": ["431", "432"],
    "51": ["511", "512"], "52": ["521", "522"], "53": ["531", "532"],
  }
  const [nowIndicatorsRdExplain, setNowIndicatorsRdExplain] = useState(IndicatorsRdExplain[selectedIndicatorsRd])
  useEffect(() => {
    if (selectedIndicatorsRd !== undefined) {
      setNowIndicatorsRdExplain(IndicatorsRdExplain[selectedIndicatorsRd])
    }
  }, [selectedIndicatorsRd])
  function ExlpainItem({ labelName, defaultValue }) {
    return (
      <div style={{ paddingTop: "5vh", height: "15vh" }}>
        <Form.Item
          label={labelName}
        >
          <Input defaultValue={defaultValue} readOnly />
        </Form.Item>
      </div>
    )
  }
  return (
    <div style={{height:"41vh", width:"100%", fontSize:"5vh"}}>
      <Form>
        <ExlpainItem
        // style={{fontSize:"15px"}}
          labelName="指标公式"
          defaultValue={nowIndicatorsRdExplain[0]}
        />
        <ExlpainItem
          labelName="指标解释"
          defaultValue={nowIndicatorsRdExplain[1]}
        />
      </Form>
    </div>
  )
}
