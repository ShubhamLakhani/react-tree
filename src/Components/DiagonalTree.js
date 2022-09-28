import React from 'react';
import Tree from 'react-d3-tree';

const svgSquare = {
  shape: 'circle',
  shapeProps: {
    width: 20,
    height: 20,
    cx: 1,
    cy: 1,
    r: 13,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4,
  },
};
const svgPath = {
  shape: 'path',
  shapeProps: {
    d: 'M0,0C70,0 70,-280 140,-280',
    fill: 'none',
    stroke: 'yellow',
  },
};

const myTreeData = [
  {
    name: 'CEO',
    _collapsed: true,

    children: [
      {
        name: 'Department Head A',
        _collapsed: true,
        nodeSvgShape: {
          shape: 'circle',
          shapeProps: {
            width: 20,
            height: 20,
            cx: 1,
            cy: 1,
            r: 10,
            fill: 'red',
            stroke: 'grey',
            strokeWidth: 3,
          },
        },
        children: [
          {
            name: 'Section Head A',
            _collapsed: true,
            nodeSvgShape: {
              shape: 'circle',
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: 'orange',
                stroke: 'grey',
                strokeWidth: 3,
                textAnchor: 'end',
              },
            },
            children: [
              {
                name: 'Executive Head A',
                _collapsed: true,
                nodeSvgShape: {
                  shape: 'circle',
                  shapeProps: {
                    width: 20,
                    height: 20,
                    cx: 1,
                    cy: 1,
                    r: 10,
                    fill: 'orange',
                    stroke: 'grey',
                    strokeWidth: 3,
                    textAnchor: 'end',
                  },
                },
                children: [
                  {
                    name: 'staff A',
                    _collapsed: true,
                    nodeSvgShape: {
                      shape: 'circle',
                      shapeProps: {
                        width: 20,
                        height: 20,
                        cx: 1,
                        cy: 1,
                        r: 10,
                        fill: 'orange',
                        stroke: 'grey',
                        strokeWidth: 3,
                        textAnchor: 'end',
                      },
                    },
                  },
                ],
              },
              {
                name: 'Executive Head B',
                nodeSvgShape: {
                  shape: 'circle',
                  shapeProps: {
                    width: 20,
                    height: 20,
                    cx: 1,
                    cy: 1,
                    r: 10,
                    fill: 'purple',
                    stroke: 'grey',
                    strokeWidth: 3,
                  },
                },
                children: [
                  {
                    name: 'staff A',
                    _collapsed: true,
                    nodeSvgShape: {
                      shape: 'circle',
                      shapeProps: {
                        width: 20,
                        height: 20,
                        cx: 1,
                        cy: 1,
                        r: 10,
                        fill: 'orange',
                        stroke: 'grey',
                        strokeWidth: 3,
                        textAnchor: 'end',
                      },
                    },
                  },
                ],
              },
              {
                name: 'Executive Head C',
                nodeSvgShape: {
                  shape: 'circle',
                  shapeProps: {
                    width: 20,
                    height: 20,
                    cx: 1,
                    cy: 1,
                    r: 10,
                    fill: 'purple',
                    stroke: 'grey',
                    strokeWidth: 3,
                  },
                },
                children: [
                  {
                    name: 'staff A',
                    _collapsed: true,
                    nodeSvgShape: {
                      shape: 'circle',
                      shapeProps: {
                        width: 20,
                        height: 20,
                        cx: 1,
                        cy: 1,
                        r: 10,
                        fill: 'orange',
                        stroke: 'grey',
                        strokeWidth: 3,
                        textAnchor: 'end',
                      },
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'Section Head B',
            nodeSvgShape: {
              shape: 'circle',
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: 'purple',
                stroke: 'grey',
                strokeWidth: 3,
              },
            },
            children: [
              {
                name: 'Executive Head A',
                _collapsed: true,
                nodeSvgShape: {
                  shape: 'circle',
                  shapeProps: {
                    width: 20,
                    height: 20,
                    cx: 1,
                    cy: 1,
                    r: 10,
                    fill: 'orange',
                    stroke: 'grey',
                    strokeWidth: 3,
                    textAnchor: 'end',
                  },
                },
              },
              {
                name: 'Executive Head B',
                nodeSvgShape: {
                  shape: 'circle',
                  shapeProps: {
                    width: 20,
                    height: 20,
                    cx: 1,
                    cy: 1,
                    r: 10,
                    fill: 'purple',
                    stroke: 'grey',
                    strokeWidth: 3,
                  },
                },
              },
            ],
          },
          {
            name: 'Section Head C',
            nodeSvgShape: {
              shape: 'circle',
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: 'purple',
                stroke: 'grey',
                strokeWidth: 3,
              },
            },
          },
        ],
      },
      {
        name: 'Department Head B',
        _collapsed: true,
        nodeSvgShape: {
          shape: 'circle',
          shapeProps: {
            width: 20,
            height: 20,
            cx: 1,
            cy: 1,
            r: 10,
            fill: 'red',
            stroke: 'grey',
            strokeWidth: 3,
          },
        },

        children: [
          {
            name: 'Section Head A',
            nodeSvgShape: {
              shape: 'circle',
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: 'purple',
                stroke: 'grey',
                strokeWidth: 3,
              },
            },
          },
          {
            name: 'Section Head B',
            nodeSvgShape: {
              shape: 'circle',
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: 'purple',
                stroke: 'grey',
                strokeWidth: 3,
              },
            },
          },
        ],
      },
      {
        name: 'Department Head C',
        _collapsed: true,
        nodeSvgShape: {
          shape: 'circle',
          shapeProps: {
            width: 20,
            height: 20,
            cx: 1,
            cy: 1,
            r: 10,
            fill: 'blue',
            stroke: 'grey',
            strokeWidth: 3,
          },
        },
        children: [
          {
            name: 'Section Head A',
            nodeSvgShape: {
              shape: 'circle',
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: 'orange',
                stroke: 'grey',
                strokeWidth: 3,
                textAnchor: 'end',
              },
            },
          },
          {
            name: 'Section Head B',
            nodeSvgShape: {
              shape: 'circle',
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: 'purple',
                stroke: 'grey',
                strokeWidth: 3,
              },
            },
          },
          {
            name: 'Section Head C',
            nodeSvgShape: {
              shape: 'circle',
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: 'purple',
                stroke: 'grey',
                strokeWidth: 3,
              },
            },
          },
        ],
      },
    ],
  },
];
function DiagonalTree() {
  
    return (
      <div
        id="treeWrapper"
        style={{ width: '100%', height: '1920px', textAlign: 'center' }}
      >
        <Tree data={myTreeData} nodeSvgShape={svgSquare} {...svgPath} translate={{x: 200, y: 200}}/>
      </div>
    );
  
}
export default DiagonalTree;