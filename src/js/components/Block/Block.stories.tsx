import React from 'react';

import { Block } from './Block';
import { BADGE, Storybook } from '../../storybook';
import { blocks } from './mockData';

export default {
  title: 'Components/Block',
  component: Block,
  argTypes: {},
  decorators: [(Story) => <Storybook.Wrapper><Story /></Storybook.Wrapper>],
  parameters: {
    badges: [BADGE.DEV]
  }
};

const toggleBlockOpen = (blockId, setBlockState) => setBlockState(prevState => ({ ...prevState, [blockId]: { ...prevState[blockId], isOpen: !prevState[blockId].isOpen } }))

// Stories

const Template = (args) => <Block {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  uid: "123",
  rawContent: blocks[0].raw,
  renderedContent: blocks[0].rendered(),
  isOpen: true,
  refsCount: 12
};

export const Editing = Template.bind({});
Editing.args = {
  isEditing: true,
  isOpen: true,
  rawContent: blocks[0].raw,
  renderedContent: blocks[0].rendered(),
};

export const Series = () => {
  const [blockState, setBlockState] = React.useState({
    b1: {
      isOpen: true,
      rawContent: blocks[0].raw,
      renderedContent: blocks[0].rendered(),
      presentUser: null,
    },
    b2: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
      presentUser: null,
    },
    b3: {
      isOpen: true,
      rawContent: blocks[2].raw,
      renderedContent: blocks[2].rendered(),
      presentUser: null,
    },
  });

  return (
    <>
      <Block
        uid="1"
        isOpen={blockState["b1"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b1", setBlockState)}
        rawContent={blockState["b1"].rawContent}
        renderedContent={blockState["b1"].renderedContent}
        presentUser={blockState["b1"].presentUser}
      />
      <Block
        uid="2"
        isOpen={blockState["b2"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b2", setBlockState)}
        rawContent={blockState["b2"].rawContent}
        renderedContent={blockState["b2"].renderedContent}
        presentUser={blockState["b2"].presentUser}
      />
      <Block uid="3"
        isOpen={blockState["b3"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b3", setBlockState)}
        rawContent={blockState["b3"].rawContent}
        renderedContent={blockState["b3"].renderedContent}
        presentUser={blockState["b3"].presentUser}
      />
    </>
  )
};

export const References = () => {
  return (
    <Block
      uid="1"
      isSelected={false}
      isOpen={true}
      refsCount={12}
      rawContent={blocks[0].raw}
      renderedContent={blocks[0].rendered()}
    >
    </Block>
  )
};

export const Selected = () => {
  return (
      <Block
        uid="1"
        isSelected={true}
        isOpen={true}
      rawContent={blocks[0].raw}
      renderedContent={blocks[0].rendered()}
      >
    </Block>
  )
};

export const MultipleSelected = () => {
  return (
    <>
      <Block
        uid="123"
        isSelected={true}
        isOpen={true}
        rawContent={blocks[0].raw}
        renderedContent={blocks[0].rendered()}
      />
      <Block
        uid="123"
        isSelected={true}
        isOpen={true}
        rawContent={blocks[1].raw}
        renderedContent={blocks[1].rendered()}
      >
        <Block
          uid="123"
          isSelected={true}
          isOpen={true}
          rawContent={blocks[2].raw}
          renderedContent={blocks[2].rendered()}
        >
          <Block
            uid="123"
            isSelected={true}
            isOpen={true}
            rawContent={blocks[0].raw}
            renderedContent={blocks[0].rendered()}
          >
          </Block>
        </Block>
      </Block>
    </>
  )
};

export const Tree = () => {
  const [blockState, setBlockState] = React.useState({
    b1: {
      isOpen: true,
      rawContent: blocks[0].raw,
      renderedContent: blocks[0].rendered(),
      presentUser: null,
    },
    b2: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
      presentUser: null,
    },
    b3: {
      isOpen: true,
      rawContent: blocks[2].raw,
      renderedContent: blocks[2].rendered(),
      presentUser: null,
    },
  });

  return (
    <>
      <Block
        uid="1"
        isOpen={blockState["b1"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b1", setBlockState)}
        rawContent={blockState["b1"].rawContent}
        renderedContent={blockState["b1"].renderedContent}
        presentUser={blockState["b1"].presentUser}
      >
        <Block uid="2"
          isOpen={blockState["b2"].isOpen}
          handlePressToggle={() => toggleBlockOpen("b2", setBlockState)}
          rawContent={blockState["b2"].rawContent}
          renderedContent={blockState["b2"].renderedContent}
          presentUser={blockState["b2"].presentUser}
        >
          <Block uid="3"
            isOpen={blockState["b3"].isOpen}
            handlePressToggle={() => toggleBlockOpen("b3", setBlockState)}
            rawContent={blockState["b3"].rawContent}
            renderedContent={blockState["b3"].renderedContent}
            presentUser={blockState["b3"].presentUser}
          />
        </Block>
      </Block>
    </>
  )
};

export const Welcome = () => {
  const [blockState, setBlockState] = React.useState({
    b1: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
    },
    b2: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
    },
    b3: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
    },
    b4: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
    },
    b5: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
    },
    b6: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
    },
  })

  return (
    <>
      <Block
        uid="1"
        isOpen={blockState["b1"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b1", setBlockState)}
        rawContent={blockState["b1"].rawContent}
        renderedContent={blockState["b1"].renderedContent}
      >
        <Block uid="2"
          isOpen={blockState["b2"].isOpen}
          handlePressToggle={() => toggleBlockOpen("b2", setBlockState)}
          rawContent={blockState["b2"].rawContent}
          renderedContent={blockState["b2"].renderedContent}
        >
          <Block uid="3"
            isOpen={blockState["b3"].isOpen}
            handlePressToggle={() => toggleBlockOpen("b3", setBlockState)}
            rawContent={blockState["b3"].rawContent}
            renderedContent={blockState["b3"].renderedContent}
          />
          <Block
            uid="4"
            isOpen={blockState["b4"].isOpen}
            handlePressToggle={() => toggleBlockOpen("b4", setBlockState)}
            rawContent={blockState["b4"].rawContent}
            renderedContent={blockState["b4"].renderedContent}
          >
            <Block uid="5"
              isOpen={blockState["b5"].isOpen}
              handlePressToggle={() => toggleBlockOpen("b5", setBlockState)}
              rawContent={blockState["b5"].rawContent}
              renderedContent={blockState["b5"].renderedContent}
            >
              <Block uid="6"
                isOpen={blockState["b6"].isOpen}
                handlePressToggle={() => toggleBlockOpen("b6", setBlockState)}
                rawContent={blockState["b6"].rawContent}
                renderedContent={blockState["b6"].renderedContent}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </>
  )
};

export const WithAvatars = ({ ...args }) => {
  const [blockState, setBlockState] = React.useState({
    b1: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
    },
    b2: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
    },
    b3: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
      presentUser: null,
    },
    b4: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
    },
    b5: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
    },
    b6: {
      isOpen: true,
      rawContent: blocks[1].raw,
      renderedContent: blocks[1].rendered(),
      presentUser: null,
    },
  })


  return (
    <>
      <Block
        uid="1"
        isOpen={blockState["b1"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b1", setBlockState)}
        rawContent={blockState["b1"].rawContent}
        renderedContent={blockState["b1"].renderedContent}
        isLocked={true}
        presentUser={{ username: "Jeff", color: "#DDA74C" }}
      >
        <Block uid="2"
          isOpen={blockState["b2"].isOpen}
          handlePressToggle={() => toggleBlockOpen("b2", setBlockState)}
          rawContent={blockState["b2"].rawContent}
          renderedContent={blockState["b2"].renderedContent}
          isLocked={true}
          presentUser={{ username: "Matei", color: "#C45042" }}
          refsCount={10}
        >
          <Block uid="3"
            isOpen={blockState["b3"].isOpen}
            handlePressToggle={() => toggleBlockOpen("b3", setBlockState)}
            rawContent={blockState["b3"].rawContent}
            renderedContent={blockState["b3"].renderedContent}
            refsCount={10}
          />
          <Block
            uid="4"
            isOpen={blockState["b4"].isOpen}
            handlePressToggle={() => toggleBlockOpen("b4", setBlockState)}
            rawContent={"Short block conent"}
            renderedContent={"Short block conent"}
            isLocked={true}
            refsCount={10}
            presentUser={{ username: "Alex", color: "#611A58" }}
          >
            <Block uid="5"
              isOpen={blockState["b5"].isOpen}
              handlePressToggle={() => toggleBlockOpen("b5", setBlockState)}
              rawContent={blockState["b5"].rawContent}
              renderedContent={blockState["b5"].renderedContent}
              presentUser={{ username: "Felipe Silva", color: "#21A469" }}
              isLocked={true}
            >
              <Block uid="6"
                isOpen={blockState["b6"].isOpen}
                handlePressToggle={() => toggleBlockOpen("b6", setBlockState)}
                rawContent={blockState["b6"].rawContent}
                renderedContent={blockState["b6"].renderedContent}
                presentUser={null}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </>
  )
};
