
import React, { useState, useEffect } from 'react';
import './index.css'
import { SISTERS, getSisters } from './mock.js'
import { loadImgHeights, sum, omitByIndexes, deepClone } from './util'

import LoadMore from './loadMore.js'
// console.log(SISTERS)
let page = 1;
const WaterFall = (props) => {
  const [images, setImages] = useState(SISTERS.slice(0, 10));
  const [imgHeights, setImageHeights] = useState([]);
  const [imgLoaded, setLoaded] = useState(false);
  const [leftImgIndexes, setLeftImgIndexes] = useState([]);
  const [rightImgIndexes, setRightImgIndexes] = useState([]);

  const greedy = (heights) => {
    let leftHeight = 0;
    let rightHeight = 0;
    let left = [];
    let right = [];
    heights.forEach((height, index) => {
      if (leftHeight >= rightHeight) {
        right.push(index)
        rightHeight += height
      } else {
        left.push(index)
        leftHeight += height
      }
    })

    return { left, right }
  }
  // // 选出图片中高度接近图片总高度一半的元素
  // const dpHalf = (heights) => {
  //   // console.log(heights)

  // }
  useEffect(() => {
    // let imgArr = getSisters(page)
    async function init() {
      const imgHeight = await loadImgHeights(images)
      console.log(imgHeight)
      setImageHeights(imgHeight)
      const { left, right } = greedy(imgHeight)
      setLeftImgIndexes(left)
      setRightImgIndexes(right)
      setLoaded(true)
    }
    init()

    // setImages(_img.concat(imgArr))
  }, [])
  async function loadImg(imgArr) {
    let _left = deepClone(leftImgIndexes);
    let _right = deepClone(rightImgIndexes);
    console.log(images)
    let _img = deepClone(images)
    setImages(_img.concat(imgArr))
    const imgHeight = await loadImgHeights(images)
    // console.log(imgHeight)
    // setImageHeights(imgHeight)
    const { left, right } = greedy(imgHeight)
    setLeftImgIndexes(_left.concat(left))
    setRightImgIndexes(_right.concat(right))
  }
  const loadMoreFn = () => {
    console.log('load')
    page++;
    console.log(page)
    let imgArr = getSisters(page)
    console.log(imgArr)

    loadImg(imgArr)
  }
  return (
    <div className='water-fall'>
      <LoadMore
        loadMoreFn={loadMoreFn}
      >
        <div className='half'>
          {
            leftImgIndexes.map((em, index) => {
              return (
                <img
                  key={index} src={images[em]}
                  className='img'
                  style={{
                    width: '100%',
                    height: `${imgHeights[em]}px`
                  }}
                  alt="" />
              )
            })
          }
        </div>
        <div className='half'>
          {
            rightImgIndexes.map((em, index) => {
              return (
                <img
                  key={index} src={images[em]}
                  className='img'
                  style={{
                    width: '100%',
                    height: `${imgHeights[em]}px`
                  }}
                  alt="" />
              )
            })
          }
        </div>
      </LoadMore>

    </div>
  )
}

export default WaterFall