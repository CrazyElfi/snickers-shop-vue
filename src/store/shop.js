export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike Red',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ex scelerisque risus iaculis vulputate. Duis sit amet vulputate felis, sed viverra purus. Integer lorem ante, egestas eget varius eu, pharetra at metus. ',
                img: require('../assets/img/1.png')
            },
            {
                id: 2,
                title: 'Nike Default',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ex scelerisque risus iaculis vulputate. Duis sit amet vulputate felis, sed viverra purus. Integer lorem ante, egestas eget varius eu, pharetra at metus. ',
                img: require('../assets/img/4.png')
            },
            {
                id: 3,
                title: 'Nike Green',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ex scelerisque risus iaculis vulputate. Duis sit amet vulputate felis, sed viverra purus. Integer lorem ante, egestas eget varius eu, pharetra at metus. ',
                img: require('../assets/img/7.png')
            },
            {
                id: 4,
                title: 'Nike Street',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ex scelerisque risus iaculis vulputate. Duis sit amet vulputate felis, sed viverra purus. Integer lorem ante, egestas eget varius eu, pharetra at metus. ',
                img: require('../assets/img/10.png')
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList (state) {
            return state.shopList
        }
    },
}
