USE [WaterPlants]
GO

/****** Object:  Table [dbo].[MainPlant]    Script Date: 1/16/2020 11:54:12 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MainPlant](
	[P_ID] [int] NOT NULL,
	[Plantname] [varchar](50) NOT NULL,
	[Active] [bit] NOT NULL,
	[Start_Time] [datetime] NOT NULL,
	[End_Time] [datetime] NOT NULL,
	[Time_Diff] [datetime] NOT NULL
) ON [PRIMARY]
GO


