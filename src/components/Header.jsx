import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

const Header = () => {
  return (
    <div>
      <div className="header">
        <p className="shapelydemo">Shapely Demo</p>
        <div className="header_text">
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">PORTFOLIO</a>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    ABOUTTHETESTS
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    LEVEL1
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <a href="">SHOP</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
