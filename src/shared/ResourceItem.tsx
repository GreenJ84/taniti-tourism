import React from 'react'
import styled from 'styled-components';

export interface IResourceInfo {
  title: string;
  description: string;
  imagePath: string;
}
export interface IResourceProps extends IResourceInfo {
  leftAlign: boolean;
}

const ResourceItem = ({title, description, imagePath,  leftAlign}: IResourceProps) => {
  return (
    <Resource>
      <h3 className={leftAlign ? "" : "right"}>
        {title}
      </h3>
      <div className={leftAlign ? '' : 'right'}>
        <div>
          <img src={imagePath} alt={title + ' image'}/>
        </div>
        <p className='para'>
          {description}
        </p>
      </div>
    </Resource>
  )
}

export default ResourceItem;

const Resource = styled.li`
  list-style: none;
  width: 90%;
  margin: 0 auto 40px;
  > h3{
    font-size: 1.8em;
    margin-top: 80px;
    margin-bottom: 10px;
  }
  > h3.right{
    text-align: right;
  }

  > div {
    display: flex;
    gap: 20px;
    > div {
      flex: 0 0 20vw;
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        width: 250px;
        height: 300px;
        padding: 10px;
        border-radius: 20px;
        object-fit: fill;
        background-color: rgb(var(--accent));
      }
    }
  }
  > div.right {
    flex-direction: row-reverse;
  }
`;