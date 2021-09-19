const HelloWorld = Vue.createApp({
	data(){
	    return{
			title:Todos:"",
			todoLists:[
				{id:"0", text:"Breakfast", checked: true},
				{id:"1", text:"Lunch", checked: false},
				{id:"2", text:"Dinner", checked: false}
			]
		 };
	},	 

    methods:{
	    toggleItem(todo){
		    todo.checked =!todo.checked
	        }
        }

});

HelloWorld.mount("#APP");
