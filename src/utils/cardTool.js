/**
 * 判断入参是否是对象
 * @param {*} val
 * @returns true/false
 */
function isObject(val) {
  return val !== null && typeof val === 'object'
}

/**
 * 获取参数类型
 * @param {*} arg
 * @returns string
 */
// demo:
// getType(1) => 'number'
// getType('aaa') => 'string'
export function getType(arg) {
  return Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
}

/**
 * 案例：打点字符串
 * @param {*} ctx canvas2d对象
 * @param {*} text text字符串
 * @param {*} limitWidth 限制文本大小
 * @param {*} sign 打点显示字符
 * @returns 返回一个符合长度的带符号字符串
 */

// demo:
// dottingText(ctx, '哈哈哈哈哈哈哈哈哈', 100, '...') => '哈哈哈...'
export function dottingText(ctx, text, limitWidth, sign = '...') {
  text = text || ''
  let result = ''
  let originWidth = ctx.measureText(text + sign).width
  let charArr = text.split('')
  if (originWidth <= limitWidth) {
    return text
  } else {
    for (let i = 0; i < charArr.length; i++) {
      if (ctx.measureText(result).width < limitWidth) {
        result += charArr[i]
      } else {
        result += sign
        return result
      }
    }
  }
}

/**
 * 设置字体样式
 * @param {*} ctx
 * @param {*} options
 * @returns void
 */
// demo:
// ctx.fillStyle = '#222326'
// ctx.textAlign = 'left'
// ctx.textBaseline = 'middle'
// ctx.font = '48px HYZhengYuan-75W'

export function setFontStyle(ctx, options) {
  if (isObject(options)) {
    for (let attr in options) {
      ctx[attr] = options[attr]
    }
  }
}
/**
 * 绘制多行文本
 * @param {*} ctx
 * @param {*} text
 * @param {*} pointX
 * @param {*} pointY
 * @param {*} maxWidth
 * @param {*} rowNum
 * @param {*} lineHeight
 * @returns any
 */

// demo:
// drawRowtext(ctx, '哈哈哈哈哈哈哈哈', 0, 100, 300, 2, 40, {
//   fillStyle: '#222326',
//   textAlign: 'left',
//   font: '48px HYZhengYuan-75W',
// })
// 哈哈哈哈
// 哈哈哈...

export function drawRowtext(
  ctx,
  text = '',
  pointX,
  pointY,
  maxWidth,
  rowNum,
  lineHeight,
  sign = '...',
  options
) {
  let currRowWidth = 0
  let currRow = 1
  let str = ''
  setFontStyle(ctx, options)
  for (let i = 0; i < text.length; i++) {
    str += text[i]
    if (rowNum < currRow + 1) {
      currRowWidth += ctx.measureText(str + sign).width
      if (currRowWidth >= maxWidth) {
        str += sign
      }
    } else {
      currRowWidth += ctx.measureText(str).width
    }

    // 行末才开始写字
    if (currRowWidth >= maxWidth || i === text.length - 1) {
      currRowWidth = 0
      currRow++

      fillText(
        ctx,
        str,
        pointX + currRowWidth,
        pointY + currRow * lineHeight,
        maxWidth
      )
      if (rowNum < currRow) {
        return
      } else {
        str = ''
      }
    }
  }
}

/**
 * 绘制文本
 * @param {*} ctx
 * @param {*} text
 * @param {*} x
 * @param {*} y
 * @param {*} maxWidth
 * @param {*} options
 */
export function fillText(ctx, text, x, y, maxWidth, options) {
  setFontStyle(ctx, options)
  ctx.fillText(text, x, y, maxWidth)
}

/**
 * 绘制矩形
 * @param {*} ctx
 * @param {*} x
 * @param {*} y
 * @param {*} width
 * @param {*} height
 * @param {*} radius
 */
export function drawRoundedRectangle(ctx, x, y, width, height, radius) {
  ctx.beginPath()
  ctx.arc(x + radius, y + radius, radius, Math.PI, (Math.PI * 3) / 2)
  ctx.lineTo(width - radius + x, y)
  ctx.arc(
    width - radius + x,
    radius + y,
    radius,
    (Math.PI * 3) / 2,
    Math.PI * 2
  )
  ctx.lineTo(width + x, height + y - radius)
  ctx.arc(width - radius + x, height - radius + y, radius, 0, (Math.PI * 1) / 2)
  ctx.lineTo(radius + x, height + y)
  ctx.arc(radius + x, height - radius + y, radius, (Math.PI * 1) / 2, Math.PI)
  ctx.closePath()
}

/**
 * 创建键图片
 * @param {*} url
 * @param {*} callback
 * @returns any
 */
export function createImage(url, callback) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = url
    img.onload = () => {
      resolve(img)
      img = null
      callback && callback()
    }
    img.onerror = () => {
      reject()
      img = null
    }
  })
}

/**
 * 获取对象的指定key值
 * eg:
 *  var obj = {
 *      a:1,
 *      b:2,
 *      c:{
 *          d:3,
 *          e:[
 *              1,2,3
 *          ],
 *          f:[
 *              {
 *                  1:2
 *              }
 *          ]
 *      }
 *  };
 *
 *  console.log(
 *      getVal(obj, 'a'),
 *      getVal(obj, 'c.d'),
 *      getVal(obj, 'c.e.1'),
 *      getVal(obj, 'c.f.0.1'),
 *      getVal(obj, 'c.f.f', 'haha'),
 *      obj
 *  )
 * @param {Object|Array} target
 * @param {string} query
 * @param {any} defaultValue
 */
export function getVal(obj, query, defaultValue) {
  if (obj === null || !(typeof obj === 'object')) {
    let realType = obj === null ? 'null' : typeof obj
    console.error(
      `[getVal]: parameter obj's type should be 'object', but it is ${realType}`
    )

    return defaultValue
  }
  if (typeof query !== 'string') {
    throw new Error(
      `[getVal]: parameter query's should be string, but it is ${typeof query}`
    )
  }
  let keys = query.split('.')
  let valObj = obj
  for (let i = 0, len = keys.length; valObj && i < len; i++) {
    valObj = valObj[keys[i]]
  }
  if (!valObj) {
    return defaultValue
  } else {
    return valObj
  }
}
