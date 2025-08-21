import{j as e,x as N,S as t}from"./iframe-BuezHbvL.js";const T=({children:P,onClick:Y})=>e.jsx(W,{type:"button",className:"my-button",onClick:Y,children:P}),W=N.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  padding: 11px 20px;
  margin: 1rem;
`;T.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Toggles",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const k={title:"Toggles",component:T,parameters:{}},o={render:()=>e.jsx("div",{children:e.jsx("span",{children:"By default the toggle values defined in the parameters will be used. Allowing modifications from the menu bar."})})},n={render:()=>e.jsxs("div",{children:[e.jsx("span",{children:"You can replace or change global toggles at the story level using the parameters option."}),e.jsx(t,{children:`Story.parameters = {
  toggles: {
    options: [
      {
        id: 'new-option-1',
        title: 'New Option 1',
        defaultValue: false,
      },
      {
        id: 'new-option-2',
        title: 'Options 2',
        defaultValue: true,
      }
    ]
  }
}`})]}),parameters:{toggles:{options:[{id:"new-option-1",title:"New Option 1",defaultValue:!1},{id:"new-option-2",title:"Options 2",defaultValue:!0}]}}},i={render:()=>e.jsxs("div",{children:[e.jsx("span",{children:"You can set `clearable` to `false` to hide option to reset toggle values to their defaults."}),e.jsx(t,{children:`Story.parameters = {
  toggles: {
    clearable: false,
  }
}`})]}),parameters:{toggles:{clearable:!1}}},a={render:()=>e.jsxs("div",{children:[e.jsx("span",{children:"You can override toggle values using the override option with the id and new value. This will override the default toggle values."}),e.jsx(t,{children:`Story.parameters = {
  toggles: {
    overrides: {
      'option-1': false,
      'option-2': false,
      'option-3': false,
    }
  }
}`})]}),parameters:{toggles:{overrides:{"option-1":!1,"option-2":!1,"option-3":!1}}}},s={render:()=>e.jsxs("div",{children:[e.jsx("span",{children:"You can set the description on the toggle to show an info icon that displays on hover."}),e.jsx(t,{children:`Story.parameters = {
  toggles: {
    options: [
      {
        id: 'info-option',
        title: 'With info',
        description: 'This toggle has info/description',
        defaultValue: false,
      },
      {
        id: 'no-info-option',
        title: 'Without info',
        defaultValue: false,
      },
    ]
  }
}`})]}),parameters:{toggles:{options:[{id:"info-option",title:"With info",description:"This toggle has info/description",defaultValue:!1},{id:"no-info-option",title:"Without info",defaultValue:!1}]}}},r={render:()=>e.jsxs("div",{children:[e.jsxs("span",{children:["You can set the toggle disabled property to a boolean or an object. The object will keys are other toggle ids and the value that will disable the trigger.",e.jsx("br",{}),e.jsx("br",{}),"For example, the following setup would disable option-2 when option-1 is set to true. Option-3 is always disabled."]}),e.jsx(t,{children:`Story.parameters = {
  toggles: {
    options: [
      {
        id: 'option-1',
        title: 'Option 1',
        defaultValue: false,
      },
      {
        id: 'option-2',
        title: 'Option 2',
        defaultValue: true,
        disabled: {
          "option-1": true
        }
      },
      {
        id: 'option-3',
        title: 'Option 3',
        defaultValue: true,
        disabled: true,
      },
    ]
  }
}`})]}),parameters:{toggles:{options:[{id:"option-1",title:"Option 1",defaultValue:!1},{id:"option-2",title:"Option 2",defaultValue:!0,disabled:{"option-1":!0}},{id:"option-3",title:"Option 3",defaultValue:!0,disabled:!0}]}}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div>
      <span>
        By default the toggle values defined in the parameters will be used. Allowing modifications from the menu bar.
      </span>
    </div>
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div>
      <span>
        You can replace or change global toggles at the story level using the parameters option.
      </span>

      <StyledPre>
      {\`Story.parameters = {
  toggles: {
    options: [
      {
        id: 'new-option-1',
        title: 'New Option 1',
        defaultValue: false,
      },
      {
        id: 'new-option-2',
        title: 'Options 2',
        defaultValue: true,
      }
    ]
  }
}\`}
      </StyledPre>
    </div>,
  parameters: {
    toggles: {
      options: [{
        id: 'new-option-1',
        title: 'New Option 1',
        defaultValue: false
      }, {
        id: 'new-option-2',
        title: 'Options 2',
        defaultValue: true
      }]
    }
  }
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var f,h,m;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div>
      <span>
        You can set \`clearable\` to \`false\` to hide option to reset toggle values to their defaults.
      </span>

      <StyledPre>
      {\`Story.parameters = {
  toggles: {
    clearable: false,
  }
}\`}
      </StyledPre>
    </div>,
  parameters: {
    toggles: {
      clearable: false
    }
  }
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var v,b,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div>
      <span>
        You can override toggle values using the override option with the id and new value. This will override the default toggle values.
      </span>

      <StyledPre>
      {\`Story.parameters = {
  toggles: {
    overrides: {
      'option-1': false,
      'option-2': false,
      'option-3': false,
    }
  }
}\`}
      </StyledPre>
    </div>,
  parameters: {
    toggles: {
      overrides: {
        'option-1': false,
        'option-2': false,
        'option-3': false
      }
    }
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,x,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div>
      <span>
        You can set the description on the toggle to show an info icon that displays on hover.
      </span>

      <StyledPre>
      {\`Story.parameters = {
  toggles: {
    options: [
      {
        id: 'info-option',
        title: 'With info',
        description: 'This toggle has info/description',
        defaultValue: false,
      },
      {
        id: 'no-info-option',
        title: 'Without info',
        defaultValue: false,
      },
    ]
  }
}\`}
      </StyledPre>
    </div>,
  parameters: {
    toggles: {
      options: [{
        id: 'info-option',
        title: 'With info',
        description: 'This toggle has info/description',
        defaultValue: false
      }, {
        id: 'no-info-option',
        title: 'Without info',
        defaultValue: false
      }]
    }
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var V,j,O;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div>
      <span>
        You can set the toggle disabled property to a boolean or an object. The object will keys are other toggle ids and the value that will disable the trigger.
        <br />
        <br />
        For example, the following setup would disable option-2 when option-1 is set to true. Option-3 is always disabled.
      </span>

      <StyledPre>
      {\`Story.parameters = {
  toggles: {
    options: [
      {
        id: 'option-1',
        title: 'Option 1',
        defaultValue: false,
      },
      {
        id: 'option-2',
        title: 'Option 2',
        defaultValue: true,
        disabled: {
          "option-1": true
        }
      },
      {
        id: 'option-3',
        title: 'Option 3',
        defaultValue: true,
        disabled: true,
      },
    ]
  }
}\`}
      </StyledPre>
    </div>,
  parameters: {
    toggles: {
      options: [{
        id: 'option-1',
        title: 'Option 1',
        defaultValue: false
      }, {
        id: 'option-2',
        title: 'Option 2',
        defaultValue: true,
        disabled: {
          "option-1": true
        }
      }, {
        id: 'option-3',
        title: 'Option 3',
        defaultValue: true,
        disabled: true
      }]
    }
  }
}`,...(O=(j=r.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const I=["Defaults","ReplacingToggles","UnclearableToggles","ToggleOverrides","ToggleInfoDescription","DisableToggles"];export{o as Defaults,r as DisableToggles,n as ReplacingToggles,s as ToggleInfoDescription,a as ToggleOverrides,i as UnclearableToggles,I as __namedExportsOrder,k as default};
