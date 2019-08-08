import React from 'react'

const styles = {
  formsBottom: {
    // 
  },
  formsBottomSearch: {
    // 
  },
  formsBottomComment: {
    // 
  }
}

function FormsBottom() {
  return (
    <div style={styles.formsBottom}>
      <input type="search" />
      <button style={styles.formsBottomSearch}></button>
      <button style={styles.formsBottomComment}></button>
    </div>
  )
}

export default FormsBottom;