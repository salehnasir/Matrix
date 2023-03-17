function add(event) {

    {
        event.preventDefault()
        
    }


    let m1 = document.getElementById('m1').value
    m1 = Number(m1)
    let m2 = document.getElementById('m2').value
    m2 = Number(m2)
    let m3 = document.getElementById('m3').value
    m3 = Number(m3)
    let m4 = document.getElementById('m4').value
    m4 = Number(m4)
    let m5 = document.getElementById('m5').value
    m5 = Number(m5)
    let m6 = document.getElementById('m6').value
    m6 = Number(m6)
    let m7 = document.getElementById('m7').value
    m7 = Number(m7)
    let m8 = document.getElementById('m8').value
    m8 = Number(m8)
    let m9 = document.getElementById('m9').value
    m9 = Number(m9)

    let arr1 = [m1, m2, m3, m4, m5, m6, m7, m8, m9]
    let y1 = document.getElementById('y1').valum
    y1 = Number(y1)
    let y2 = document.getElementById('y2').value
    y2 = Number(y2)
    let y3 = document.getElementById('y3').value
    y3 = Number(y3)
    let y4 = document.getElementById('y4').value
    y4 = Number(y4)
    let y5 = document.getElementById('y5').value
    y5 = Number(y5)
    let y6 = document.getElementById('y6').value
    y6 = Number(y6)
    let y7 = document.getElementById('y7').value
    y7 = Number(y7)
    let y8 = document.getElementById('y8').value
    y8 = Number(y8)
    let y9 = document.getElementById('y9').value
    y9 = Number(y9)

    let arr2 = [y1, y2, y3, y4, y5, y6, y7, y8, y9]

    let z1 = arr1[0] + arr2[0]
    let z2 = arr1[1] + arr2[1]
    let z3 = arr1[2] + arr2[2]
    let z4 = arr1[3] + arr2[3]
    let z5 = arr1[4] + arr2[4]
    let z6 = arr1[5] + arr2[5]
    let z7 = arr1[6] + arr2[6]
    let z8 = arr1[7] + arr2[7]
    let z9 = arr1[8] + arr2[8]

    document.getElementById('z1').value = z1
    document.getElementById('z2').value = z2
    document.getElementById('z3').value = z3
    document.getElementById('z4').value = z4
    document.getElementById('z5').value = z5
    document.getElementById('z6').value = z6
    document.getElementById('z7').value = z7
    document.getElementById('z8').value = z8
    document.getElementById('z9').value = z9
}