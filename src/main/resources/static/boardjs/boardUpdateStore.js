const {defineStore} = Pinia
const useBoardUpdateStore=defineStore('board_update',{
	// 공통으로 사용하는 데이터 설정 => static 
	// redux => state (store) = action dispatch() => reduce : vuex
	// pinia = tanStack-Query 
	// ----------------------- NodeJS / TypeScript
	// 받는 변수 (JSP) , 서버에서 결과값
	state:()=>({
		name:'',
		subject:'',
		content:'',
		pwd:'',
		msg:'',
		no:0,
		vo:{}
	}),
	// 서버와 연동 
	actions:{
		// insert => 유효성 검사 (NOT NULL = 반드시 입력이 되게 만든다)
		// 비동기 처리 => async 
		async boardUpdate({no,nameRef,subRef,contRef,pwdRef}){
			this.no=no
			if(this.name==='')
			{
				nameRef.focus()
				return
			}
			if(this.subject==='')
			{
				subRef.focus()
				return
			}
			if(this.content==='')
			{
				contRef.focus()
			}
			if(this.pwd==='')
			{
				pwdRef.focus()
				return
			}
			// => JSP
			const res=await axios.put('http://localhost:8080/board/update_vue/',{
				name:this.name,
				subject:this.subject,
				content:this.content,
				pwd:this.pwd,
				no:this.no
			})
			
			if(res.data.msg==='yes')
			{
				location.href="/board/detail?no="+this.no
			}
			else
			{
				alert("수정 입력에 실패하셨습니다")
			}
						
		},
		async boardUpdateData(){
			
		}
	}
})