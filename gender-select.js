;(function (genderSelect, undefined) {
    let genders = ["AFAB",
        'Agender',
        'Aliagender',
        'AMAB',
        'Androgyne',
        'Aporagender',
        'Bigender',
        'Binarism',
        'Body dysphoria',
        'Boi',
        'Butch',
        'Cisgender',
        'Cisnormativity',
        'Cissexism',
        'Demiboy',
        'Demigender',
        'Demigirl',
        'Dyadic',
        'Feminine-of-center',
        'Feminine-presenting',
        'Femme',
        'Female-to-male (FTM)',
        'Genderfluid',
        'Genderfuck',
        'Genderqueer',
        'Graygender',
        'Intergender',
        'Intersex',
        'Masculine-of-center',
        'Masculine-presenting',
        'Maverique',
        'Misgender',
        'Male-to-female (MTF)',
        'Multi-gender',
        'Neutrois',
        'Nonbinary',
        'Novigender',
        'Pangender',
        'Polygender',
        'Transfeminine',
        'Transgender',
        'Transsexual',
        'Trigender',
        'Two-spirit'
    ]

    genderSelect.initGender = function (selectBox) {
        if(selectBox.nodeName !== 'SELECT') throw new Error("For the plugin to work correctly, the element type is required 'SELECT'")

        let length = selectBox.options.length
        for (let i = length; i >= 0; i--) {
            selectBox.remove(i)
        }

        for (let i = 0; i < genders.length; i++) {
            let opt = document.createElement('option');
            opt.value = genders[i];
            opt.innerHTML = genders[i];
            selectBox.appendChild(opt);
        }
    }
})(window.genderSelect = window.genderSelect || {});