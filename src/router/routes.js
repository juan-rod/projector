import Home from '../components/pages/Home.vue'
import About from '../components/pages/About.vue'
import Projects from '../components/pages/Projects.vue'
import Now from '../components/pages/Now.vue'
import Timeline from '../components/pages/Timeline.vue'


export const routes = [
	{ 	
		path: '/', 
		component: Home,
		children:[
			// {path: '', component: HomeView},
			{path: '/about', component: About},
			{path: '/now', component: Now},
			{path: '/projects', component: Projects}
			// {path: '/timeline', component: Timeline}
		]
	}
]