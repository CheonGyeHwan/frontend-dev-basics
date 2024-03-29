package com.poscoict.ch08.controller.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "response")
public class XmlResult {
	private String result;
	private GuestbookVo data;
	private String message;
	
	private XmlResult() {
		
	}
	
	private XmlResult(String result, GuestbookVo data) {
		this.result = result;
		this.data = data;
	}

	private XmlResult(String result, String message) {
		this.result = result;
		this.message = message;
	}
	
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public GuestbookVo getData() {
		return data;
	}

	public void setData(GuestbookVo data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public static XmlResult success(GuestbookVo vo) {
		return new XmlResult("success", vo);
	}
	
	public static XmlResult fail(String message) {
		return new XmlResult("fail", message);
	}

	@XmlRootElement(name = "data")
	public static class GuestbookVo {
		private Long no;
		private String name;
		private String password;
		private String message;
		private String regDate;
		
		public Long getNo() {
			return no;
		}
		public void setNo(Long no) {
			this.no = no;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public String getRegDate() {
			return regDate;
		}
		public void setRegDate(String regDate) {
			this.regDate = regDate;
		}
	}
	
}
