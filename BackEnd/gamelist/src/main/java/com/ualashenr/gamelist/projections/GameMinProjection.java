package com.ualashenr.gamelist.projections;

public interface GameMinProjection {
	
	Long getId();
	String getTitle();
	Integer getGameYear();
	Double getScore();
	String getGenre();
	String getImgUrl();
	String getShortDescription();
	Integer getPosition();
}
