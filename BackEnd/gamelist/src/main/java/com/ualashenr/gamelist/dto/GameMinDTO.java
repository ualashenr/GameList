package com.ualashenr.gamelist.dto;

import com.ualashenr.gamelist.model.Game;
import com.ualashenr.gamelist.projections.GameMinProjection;

public class GameMinDTO {

	private Long id;
	private String title;
	private Double score;
	private String imgUrl;
	private String genre;
	private String shortDescription;
	private Integer year;
	
	public GameMinDTO(Game entity) {
		id = entity.getId();
		title = entity.getTitle();
		score = entity.getScore();
		imgUrl = entity.getImgUrl();
		genre = entity.getGenre();
		shortDescription = entity.getShortDescription();
		year = entity.getYear();
	}
	
	public GameMinDTO(GameMinProjection entity) {
		id = entity.getId();
		title = entity.getTitle();
		score = entity.getScore();
		imgUrl = entity.getImgUrl();
		genre = entity.getGenre();
		shortDescription = entity.getShortDescription();
		year = entity.getGameYear();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getShortDescription() {
		return shortDescription;
	}

	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}
}
