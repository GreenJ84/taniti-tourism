import React from 'react'
import styled from 'styled-components';

export interface IResourceInfo {
  title: string;
  description: string;
  imagePath: string;
  acknowledgement: string;
}
export interface IResourceProps extends IResourceInfo {
  leftAlign: boolean;
}

const ResourceItem = ({title, description, imagePath,  acknowledgement, leftAlign}: IResourceProps) => {
  return (
    <Resource>
      <h3 className={leftAlign ? "" : "right"}>
        {title}
      </h3>
      <div className={leftAlign ? '' : 'right'}>
        <figure>
          <img src={imagePath} alt={title + ' image'}/>
          <figcaption
            title={acknowledgement}
          >
              {acknowledgement}
            </figcaption>
        </figure>
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
    padding: 0 12%;
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
    > figure {
      position: relative;
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      > img {
        width: 300px;
        height: 300px;
        padding: 10px;
        border-radius: 20px;
        object-fit: fill;
        background-color: rgb(var(--accent));
      }
      > figcaption {
        position: absolute;
        top: 290px;
        left: 0;
        width: 290px;
        height: 20px;
        padding: 0 5px;
        border-radius: 0 0 10px 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        background-color: rgba(var(--secondary-bg), 0.8)
      }
    }
  }
  > div.right {
    flex-direction: row-reverse;
  }
`;